import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/pages/layout";
import Home from "../components/pages/home/Home";
import Write from "../components/pages/write/Write";
import Detail from "../components/pages/detail/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/write" element={<Write />} />
        <Route path="/item/:itemId" element={<Layout />}>
          <Route index element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
