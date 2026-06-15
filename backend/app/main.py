from fastapi import FastAPI
from .database import Base, engine
from . import models
from .routes import appointments

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Smart Appointment Scheduler")

app.include_router(appointments.router)


@app.get("/")
def home():
    return {"message": "Backend Running"}