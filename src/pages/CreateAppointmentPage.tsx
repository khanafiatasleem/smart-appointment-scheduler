import {
  Paper,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { useAppointmentStore } from "../store/appointmentStore";
import { useForm } from "react-hook-form";

interface FormData {
  title: string;
  description: string;
  appointmentDate: string;
  appointmentTime: string;
  location: string;
}

const CreateAppointmentPage = () => {
  const { register, handleSubmit } =
    useForm<FormData>();

  const addAppointment =
    useAppointmentStore(
      (state) => state.addAppointment
    );

  const onSubmit = (
    data: FormData
  ) => {
    addAppointment({
      id: Date.now(),
      ...data,
    });

    console.log(data);
  };
  return (
    <Paper sx={{ p: 4 }}>
      <Typography
        variant="h5"
        gutterBottom
      >
        Create Appointment
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(
          onSubmit
        )}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <TextField
          label="Title"
          {...register("title")}
        />

        <TextField
          label="Description"
          {...register(
            "description"
          )}
        />

        <TextField
          type="date"
          {...register(
            "appointmentDate"
          )}
        />

        <TextField
          type="time"
          {...register(
            "appointmentTime"
          )}
        />

        <TextField
          label="Location"
          {...register(
            "location"
          )}
        />

        <Button
          type="submit"
          variant="contained"
        >
          Save Appointment
        </Button>
      </Box>
    </Paper>
  );
};

export default CreateAppointmentPage;