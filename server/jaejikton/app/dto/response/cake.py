from http import HTTPStatus
from typing import Optional
from datetime import date

from fastapi import HTTPException
from pydantic import BaseModel, Field, validator

class CakeResponse(BaseModel):
    id: int = Field(...,title="<p><b>The ID of the cake</b></p>",
                            description="<p>ex) 1</p>")

    receiver: str = Field(...,title="<p><b>The name of the receiver</b></p>",
                            description="<p>ex) 최진규님</p>")

    date_of_birth: date = Field(...,title="<p><b>The date of birth of the receiver</b></p>",
                            description="<p>ex) 2023-02-18</p>")

    cake_design_id: int = Field(...,title="<p><b>The ID of the cake design</b></p>",
                            description="<p>ex) 1</p>")

    link: Optional[str] = Field(None,title="<p><b>The link of the cake</b></p>",
                            description="<p>ex) https://www.naver.com</p>")

class CakeDesignResponse(BaseModel):
    id: int = Field(...,title="<p><b>The ID of the cake design</b></p>",
                            description="<p>ex) 1</p>")

    image_url: str = Field(...,title="<p><b>The image url of the cake design</b></p>",
                            description="<p>ex) cake.png</p>")