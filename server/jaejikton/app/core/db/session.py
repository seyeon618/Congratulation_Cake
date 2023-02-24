
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.core.config.setting import settings

postgres_url = ''

engine = create_engine(postgres_url, connect_args={'options': f'-csearch_path={settings.POSTGRES_SCHEMA}'}, pool_pre_ping=True, echo=False)


SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


