from http import HTTPStatus
from typing import Optional

from fastapi import HTTPException


class ParamChecker:
    @staticmethod
    def prove_require(param: Optional[str]) -> Optional[str]:
        if param is None:
            raise HTTPException(status_code=HTTPStatus.BAD_REQUEST, detail="cake_id is required")
        return str(param)