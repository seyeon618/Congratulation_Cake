from http import HTTPStatus
from typing import Optional

from fastapi import HTTPException
from pydantic import BaseModel, Field, validator

class CreateCakeBody(BaseModel):
    receiver_name: str = Field(...,title="<p><b>The name of the receiver</b></p>",
                            description="<p>ex) 최진규님</p>")

    password: str = Field(...,title="<p><b>The password of the receiver</b></p>",
                            description="<p>ex) jingu1234</p>")

    date_of_birth: str = Field(...,title="<p><b>The date of birth of the receiver</b></p>",
                            description="<p>ex) 2023-02-18</p>")

    cake_design_id: int = Field(...,title="<p><b>The ID of the cake design</b></p>",
                            description="<p>ex) 1</p>")

class UpdateCakeBody(BaseModel):
    cake_id: int = Field(...,title="<p><b>The ID of the cake</b></p>",
                            description="<p>ex) 1</p>")
    receiver_name: str = Field(...,title="<p><b>The name of the receiver</b></p>",
                            description="<p>ex) 최진규님</p>")

    date_of_birth: str = Field(...,title="<p><b>The date of birth of the receiver</b></p>",
                            description="<p>ex) 2023-02-18</p>")

    cake_design_id: int = Field(...,title="<p><b>The ID of the cake design</b></p>",
                            description="<p>ex) 1</p>")