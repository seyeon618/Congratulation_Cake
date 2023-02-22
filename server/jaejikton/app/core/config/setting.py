import os
from pathlib import Path

from typing import Optional

from pydantic import BaseSettings, PostgresDsn

# ROOT_PATH = os.path.dirname(__file__)
ROOT_PATH = Path(__file__).parent.parent


ROOT_DIR = os.path.dirname(os.path.abspath(__file__))

class Settings(BaseSettings):
    POSTGRES_SERVER: Optional[str] = 'test'
    POSTGRES_USER :Optional[str] = 'test'
    POSTGRES_PASSWORD: Optional[str] ='test'
    POSTGRES_DB: Optional[str] = 'test'
    POSTGRES_SCHEMA: Optional[str] ='test'
    SQLALCHEMY_DATABASE_URI: Optional[PostgresDsn] = None

settings = Settings(_env_file='.env', _env_file_encoding='utf-8')