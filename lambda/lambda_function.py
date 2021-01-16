import base64
import datetime
import hashlib
import hmac
import json
import os
import sys

import boto3
import requests
from aws_requests_auth.aws_auth import AWSRequestsAuth


def post_sagemaker(binary: str):
    return {"statusCode": 200, "body": json.dumps("Hello from Lambda!")}
    method = "POST"
    service = "sagemaker"
    region = "us-east-1"
    endpoint = "https://runtime.sagemaker.us-east-1.amazonaws.com/endpoints/acchackendpoint/invocations"
    request_parameters = "Action=DescribeRegions&Version=2013-10-15"

    sign = lambda key, msg: hmac.new(key, msg.encode("utf-8"), hashlib.sha256).digest()

    def get_sig_key(key, dateStamp, regionName, serviceName):
        date = sign(("AWS4" + key).encode("utf-8"), dateStamp)
        region = sign(date, regionName)
        service = sign(region, serviceName)
        signing = sign(service, "aws4_request")
        return signing


def lambda_handler(event, context):
    auth = AWSRequestsAuth(
        aws_access_key=os.environ.get("ACCESS_KEY_ID"),
        aws_secret_access_key=os.environ.get("SECRET_ACCESS_KEY"),
        aws_host="https://runtime.sagemaker.us-east-1.amazonaws.com/endpoints/acchackendpoint/invocations",
        aws_region="us-east-1",
        aws_service="sagemaker",
    )
    print("about to go")
    ok = requests.post(
        url="https://runtime.sagemaker.us-east-1.amazonaws.com/endpoints/acchackendpoint/invocations",
        data=event["body"],
        auth=auth,
    )
    print("done")
    print(ok)

    # Read AWS access key from env. variables or configuration file. Best practice is NOT
    # to embed credentials in code.
    access_key = os.environ.get("ACCESS_KEY_ID")
    secret_key = os.environ.get("SECRET_ACCESS_KEY")

    return {"statusCode": 200, "body": json.dumps("Helloooooooooo from Lambda!")}
