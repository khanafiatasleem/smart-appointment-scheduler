import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";

import AppRoutes from "./routes/AppRoutes";
import { theme } from "./theme/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>
);