import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/pages/layout";
import Home from "../components/pages/home/Home";
import Write from "../components/pages/write/Write";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
          <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
