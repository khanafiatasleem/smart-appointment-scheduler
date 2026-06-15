import { create } from "zustand";

interface Appointment {
  id: number;
  title: string;
  description: string;
  appointmentDate: string;
  appointmentTime: string;
  location: string;
}

interface AppointmentStore {
  appointments: Appointment[];

  addAppointment: (
    appointment: Appointment
  ) => void;
}

export const useAppointmentStore =
  create<AppointmentStore>(
    (set) => ({
      appointments: [],

      addAppointment: (
        appointment
      ) =>
        set((state) => ({
          appointments: [
            ...state.appointments,
            appointment,
          ],
        })),
    })
  );