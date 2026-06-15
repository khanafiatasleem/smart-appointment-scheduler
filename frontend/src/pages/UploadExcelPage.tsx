import {
  Paper,
  Typography,
  Button,
} from "@mui/material";

const UploadExcelPage = () => {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography
        variant="h5"
        gutterBottom
      >
        Upload Excel File
      </Typography>

      <Button
        variant="contained"
        component="label"
      >
        Select Excel File

        <input
          hidden
          type="file"
          accept=".xlsx,.xls"
        />
      </Button>
    </Paper>
  );
};

export default UploadExcelPage;