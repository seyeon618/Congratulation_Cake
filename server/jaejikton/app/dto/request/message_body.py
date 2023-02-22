from http import HTTPStatus
from typing import Optional

from fastapi import HTTPException
from pydantic import BaseModel, Field, validator

class CreateMessageBody(BaseModel):

    message: str = Field(...,title="<p><b>The message of the birthday</b></p>",
                            description="<p>ex) Happy Birthday!</p>")