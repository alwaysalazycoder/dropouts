import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import routes from "../../routes";
import HackathonBar from "../../components/hackathonBar";

const HomeLayout = () => {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "home") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div>
      <HackathonBar />

      <Routes>
        {getRoutes(routes)}
        <Route path="/" element={<Navigate to="/home/default" replace />} />
      </Routes>

      
    </div>
  );
};

export default HomeLayout;
