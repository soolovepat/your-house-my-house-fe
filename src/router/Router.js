import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/pages/layout";
import Home from "../components/pages/home/Home";
import Write from "../components/pages/write/Write";
import ItemDetail from "../components/pages/detail/ItemDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/write" element={<Write />} />
        <Route path="/item/:itemId" element={<Layout />}>
          <Route index element={<ItemDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
