from typing import Optional

from pydantic import BaseModel, Field

class MessageResponse(BaseModel):
    id: int = Field(...,title="<p><b>The ID of the message</b></p>",
                            description="<p>ex) 1</p>")

    image_url: str = Field(...,title="<p><b>The image url of the message</b></p>",
                            description="<p>ex) cake.png</p>")

    message: str = Field(...,title="<p><b>The message of the birthday</b></p>",
                            description="<p>ex) Happy Birthday!</p>")

