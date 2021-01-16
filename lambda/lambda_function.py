import base64
import datetime
import hashlib
import hmac
import io
import json
import os
import sys
import time

import boto3
import requests
from aws_requests_auth.aws_auth import AWSRequestsAuth

sage = boto3.Session(
    aws_access_key_id=os.environ.get("ACCESS_KEY_ID"),
    aws_secret_access_key=os.environ.get("SECRET_ACCESS_KEY"),
    region_name="us-east-1",
).client(service_name="sagemaker-runtime", region_name="us-east-1", use_ssl=False)
table = boto3.resource("dynamodb").Table(os.environ.get("TABLE_NAME"))


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
    table.put_item(Item={
        "barcode": code,
        "timestamp": int(time.time())
        ""
    })

    return {"statusCode": 200, "body": code}
