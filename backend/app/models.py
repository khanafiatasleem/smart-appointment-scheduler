from sqlalchemy import Column, Integer, String
from .database import Base

class Appointment(Base):
    __tablename__ = "appointments"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    appointmentDate = Column(String)
    appointmentTime = Column(String)
    location = Column(String)