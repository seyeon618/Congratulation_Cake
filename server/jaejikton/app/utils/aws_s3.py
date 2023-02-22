
# TODO image upload to aws s3

# from http import HTTPStatus

# from fastapi import HTTPException

# import boto3


# def upload_image_to_aws_s3(self, request: request.UploadImageToAwsS3Param) -> response.UploadImageToAwsS3Response:
#     try:
#         s3 = boto3.client(
#             "s3",
#             aws_access_key_id=AWS_ACCESS_KEY_ID,
#             aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
#         )
#         s3.upload_fileobj(
#             request.image,
#             AWS_STORAGE_BUCKET_NAME,
#             request.image.filename,
#             ExtraArgs={
#                 "ContentType": request.image.content_type
#             }
#         )
#         return response.UploadImageToAwsS3Response(
#             image_url=f"https://{AWS_STORAGE_BUCKET_NAME}.s3.ap-northeast-2.amazonaws.com/{request.image.filename}"
#         )
#     except Exception as e:
#         raise HTTPException(status_code=HTTPStatus.INTERNAL_SERVER_ERROR, detail=str(e))