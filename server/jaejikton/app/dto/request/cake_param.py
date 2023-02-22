from typing import Optional

from fastapi import Query

from app.utils.params_checker import ParamChecker

class CakeParam:
    def __init__(
        self, 
        cake_id: int = Query(..., title="<p><b>The ID of the cake to get</b></p>",
                                 description="<p>ex) 1</p>"),
        ):
        self.cake_id = ParamChecker.prove_require(cake_id)
