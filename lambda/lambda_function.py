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
    auth = AWSRequestsAuth(
        aws_access_key=os.environ.get("ACCESS_KEY_ID"),
        aws_secret_access_key=os.environ.get("SECRET_ACCESS_KEY"),
        aws_host="runtime.sagemaker.us-east-1.amazonaws.com",
        aws_region="us-east-1",
        aws_service="sagemaker",
    )
    print("about to go")
    ok = requests.post(
        url="https://runtime.sagemaker.us-east-1.amazonaws.com/endpoints/acchackendpoint/invocations",
        data=base64.b64decode(event["body"]),
        auth=auth,
        headers={"Content-Type": "image/jpeg"},
        verify=False,
    )
    print("done")
    print(ok.text)
    code = list(json.loads(ok.text).keys())[0]
    object_key = secrets.token_urlsafe(10) + ".jpeg"
    res = s3.put_object(
        ACL="public-read",
        Body=base64.b64decode(event["body"]),
        Bucket=os.environ.get("TABLE_NAME"),
        Key=object_key,
    )
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
        },
    )

    return {"statusCode": 200, "body": code}
