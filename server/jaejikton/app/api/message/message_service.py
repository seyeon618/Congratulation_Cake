from fastapi import Depends

from sqlalchemy.orm import Session

from app.dto import request, response
from app.core.dependencies import get_db
from app.crud.crud_message import CRUDMessage
from app.utils.aws_s3 import upload_image_to_aws_s3

class MessageService:
    def __init__(self, db: Session = Depends(get_db)):
        self.db = db
        self.crud_message = CRUDMessage(db)

    def get_message(self, request_params: request.EachMessageParam) -> response.MessageResponse:
        return self.crud_message.get_message(request_params)

    def get_message_list(self, request_params: request.MessageListParam) -> list[response.MessageResponse]:
        return self.crud_message.get_messages(request_params)

    def create_message(self, cake_id: int, message: str, image_file) -> response.MessageResponse:
        url = upload_image_to_aws_s3(image_file)
        request_body = request.CreateMessageBody(cake_id=cake_id, message=message, image_url=url)
        return self.crud_message.create_message(request_body)
