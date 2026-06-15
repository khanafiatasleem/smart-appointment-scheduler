from pydantic import BaseModel

class AppointmentBase(BaseModel):
    title: str
    description: str
    appointmentDate: str
    appointmentTime: str
    location: str


class AppointmentCreate(AppointmentBase):
    pass


class AppointmentResponse(AppointmentBase):
    id: int

    class Config:
        from_attributes = True