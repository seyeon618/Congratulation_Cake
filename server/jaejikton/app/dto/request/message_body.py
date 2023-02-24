from http import HTTPStatus
from typing import Optional

from fastapi import HTTPException, Form
from pydantic import BaseModel, Field, validator

class CreateMessageBody(BaseModel):
    cake_id: int = Form(..., title="<p><b>The id of the cake</b></p>",
                            description="<p>ex) 1</p>")

    message: str = Form(...,title="<p><b>The message of the birthday</b></p>",
                            description="<p>ex) Happy Birthday!</p>")

    image_url: Optional[str] = Form(None, title="<p><b>The image url of the birthday</b></p>",
                            description="<p>ex) https://test.s3.ap-northeast-2.amazonaws.com/2021-08-18%2015:39:00.000000</p>")