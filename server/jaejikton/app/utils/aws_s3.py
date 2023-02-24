from datetime import datetime

from http import HTTPStatus

from fastapi import HTTPException

import boto3

AWS_STORAGE_BUCKET_NAME = ''
AWS_ACCESS_KEY_ID = ''
AWS_SECRET_ACCESS_KEY = ''

def upload_image_to_aws_s3(image) -> str:
    try:
        _now = str(datetime.now())
        s3 = boto3.client(
            "s3",
            aws_access_key_id=AWS_ACCESS_KEY_ID,
            aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
        )
        s3.upload_fileobj(
            image,
            AWS_STORAGE_BUCKET_NAME,
            'jaejikton-image' + '/' + _now,
            ExtraArgs={
                "ContentType": 'image/png'
            }
        )
        image_url=f"https://{AWS_STORAGE_BUCKET_NAME}.s3.ap-northeast-2.amazonaws.com/jaejikton-image/{_now}"
        return image_url

    except Exception as e:
        raise HTTPException(status_code=HTTPStatus.INTERNAL_SERVER_ERROR, detail=str(e))