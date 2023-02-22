from typing import Optional

from fastapi import Query

class MessageListParam:
    def __init__(
        self, 
        cake_id: int = Query(..., title="<p><b>The ID of the cake to get</b></p>",
                                 description="<p>ex) 1</p>"),
        ):
        self.cake_id = cake_id

class EachMessageParam:
    def __init__(
        self, 
        message_id: int = Query(..., title="<p><b>The ID of the message to get</b></p>",
                                 description="<p>ex) 1</p>"),
        ):
        self.message_id = message_id