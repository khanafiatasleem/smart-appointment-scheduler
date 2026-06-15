import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "../pages/DashBoardPage";
import CalendarPage from "../pages/CalendarPage";
import SettingsPage from "../pages/SettingsPage";
import UploadExcelPage from "../pages/UploadExcelPage";
import MainLayout from "../layouts/MainLayout";
import CreateAppointmentPage from "../pages/CreateAppointmentPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/upload" element={<UploadExcelPage />} />
          <Route
  path="/create"
  element={<CreateAppointmentPage />}
/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;