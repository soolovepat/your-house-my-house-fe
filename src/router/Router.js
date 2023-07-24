import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/pages/layout";
import Home from "../components/pages/home";
import Write from "../components/pages/write"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/write" element={<Write/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
