import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "../../routes";
import SideBar from "../../components/sidebar";
import HackathonBar from "../../components/hackathonBar/index";

const DashboardLayout = () => {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "dashboard") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>

      <div className="w-full flex h-screen">
        <SideBar />

        <div className="h-screen w-full overflow-y-scroll">

        <Routes>
          {getRoutes(routes)}
          <Route path="/" element={<Navigate to="/dashboard/main" replace />} />
        </Routes>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
