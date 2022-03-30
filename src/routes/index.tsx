import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "pages/Home";
import WorksPage from "pages/Works";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/works" element={<WorksPage />} />
    </Routes>
  );
};

export default MainRoutes;
