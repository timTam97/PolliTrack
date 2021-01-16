import base64
import io
import json
import os
import secrets
import sys
import time

import boto3
import requests
from aws_requests_auth.aws_auth import AWSRequestsAuth
from PIL import Image
from PIL.ExifTags import GPSTAGS, TAGS


class ImageMetaData(object):
    """
    Extract the exif data from any image. Data includes GPS coordinates,
    Focal Length, Manufacture, and more.
    """

    exif_data = None
    image = None

    def __init__(self, img_path):
        self.image = Image.open(img_path)
        # print(self.image._getexif())
        self.get_exif_data()
        super(ImageMetaData, self).__init__()

    def get_exif_data(self):
        """Returns a dictionary from the exif data of an PIL Image item. Also converts the GPS Tags"""
        exif_data = {}
        info = self.image._getexif()
        if info:
            for tag, value in info.items():
                decoded = TAGS.get(tag, tag)
                if decoded == "GPSInfo":
                    gps_data = {}
                    for t in value:
                        sub_decoded = GPSTAGS.get(t, t)
                        gps_data[sub_decoded] = value[t]

                    exif_data[decoded] = gps_data
                else:
                    exif_data[decoded] = value
        self.exif_data = exif_data
        return exif_data

    def get_if_exist(self, data, key):
        if key in data:
            return data[key]
        return None

    def convert_to_degress(self, value):

        """Helper function to convert the GPS coordinates
        stored in the EXIF to degress in float format"""
        d = value[0]

        m = value[1]

        s = value[2]

        return d + (m / 60.0) + (s / 3600.0)

    def get_lat_lng(self):
        """Returns the latitude and longitude, if available, from the provided exif_data (obtained through get_exif_data above)"""
        lat = None
        lng = None
        exif_data = self.get_exif_data()
        # print(exif_data)
        if "GPSInfo" in exif_data:
            gps_info = exif_data["GPSInfo"]
            gps_latitude = self.get_if_exist(gps_info, "GPSLatitude")
            gps_latitude_ref = self.get_if_exist(gps_info, "GPSLatitudeRef")
            gps_longitude = self.get_if_exist(gps_info, "GPSLongitude")
            gps_longitude_ref = self.get_if_exist(gps_info, "GPSLongitudeRef")
            if (
                gps_latitude
                and gps_latitude_ref
                and gps_longitude
                and gps_longitude_ref
            ):
                lat = self.convert_to_degress(gps_latitude)
                if gps_latitude_ref != "N":
                    lat = 0 - lat
                lng = self.convert_to_degress(gps_longitude)
                if gps_longitude_ref != "E":
                    lng = 0 - lng
        return lat, lng


table = boto3.resource("dynamodb").Table(os.environ.get("TABLE_NAME"))
ddb = boto3.Session(
    aws_access_key_id=os.environ.get("ACCESS_KEY_ID"),
    aws_secret_access_key=os.environ.get("SECRET_ACCESS_KEY"),
    region_name="us-east-1",
).client(service_name="dynamodb", region_name="us-east-1", use_ssl=False)
s3 = boto3.Session(
    aws_access_key_id=os.environ.get("ACCESS_KEY_ID"),
    aws_secret_access_key=os.environ.get("SECRET_ACCESS_KEY"),
    region_name="us-east-1",
).client(service_name="s3", region_name="us-east-1", use_ssl=False)


def lambda_handler(event, context):
    # print(event)
    # if event["requestContext"]["http"]["method"] == "POST":
    # Generate signed headers
    auth = AWSRequestsAuth(
        aws_access_key=os.environ.get("ACCESS_KEY_ID"),
        aws_secret_access_key=os.environ.get("SECRET_ACCESS_KEY"),
        aws_host="runtime.sagemaker.us-east-1.amazonaws.com",
        aws_region="us-east-1",
        aws_service="sagemaker",
    )

    # Grab the barcode from our sagemaker endpoint
    ok = requests.post(
        url="https://runtime.sagemaker.us-east-1.amazonaws.com/endpoints/acchackendpoint/invocations",
        data=base64.b64decode(event["body"]),
        auth=auth,
        headers={"Content-Type": "image/jpeg"},
        verify=False,
    )
    if ok.text == "null":
        return {"statusCode": 404, "body": json.dumps({"msg": "No barcode found."})}
    print(ok.text)
    code = list(json.loads(ok.text).keys())[0]
    object_key = secrets.token_urlsafe(10) + ".jpeg"

    # Send image to s3
    res = s3.put_object(
        ACL="public-read",
        Body=base64.b64decode(event["body"]),
        Bucket=os.environ.get("TABLE_NAME"),
        Key=object_key,
    )
    # Get image lat/long
    meta = ImageMetaData(io.BytesIO(base64.b64decode(event["body"])))
    print(meta.get_lat_lng())

    # Chuck it all in dDB
    res = ddb.put_item(
        TableName="image-data-table",
        Item={
            "barcode": {
                "S": code,
            },
            "timestamp": {
                "S": str(int(time.time())),
            },
            "image_url": {
                "S": "https://"
                + os.environ.get("TABLE_NAME")
                + ".s3.amazonaws.com/"
                + object_key
            },
            "latitude": {"N": str(meta.get_lat_lng()[0])},
            "longitude": {"N": str(meta.get_lat_lng()[1])},
        },
    )
    return {"statusCode": 200, "body": json.dumps({"msg": "success", "barcode": code})}
    # elif event["requestContext"]["http"]["method"] == "GET":
    #     res = ddb.scan(TableName="image-data-table", ComparisonOperator="NOT_NULL")
    #     print("done")
    #     return {"statusCode": 200, "body": json.loads(res.get("Items"))}
