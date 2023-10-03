import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import HomeLayout from "./layouts/home";
import AuthLayout from "./layouts/auth";
import DashboardLayout from "./layouts/dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="home/*" element={<HomeLayout />} />
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="dashboard/*" element={<DashboardLayout />} />

      <Route path="/" element={<Navigate to={"/home"} />} />
    </Routes>
  );
};

export default App;
