import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/pages/Layout";
import Home from "../components/pages/home/Home";
import Write from "../components/pages/write/Write";
import { DataProvider } from "../components/pages/write/hooks/useData";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/write" element={
          <DataProvider>
            <Write />
          </DataProvider>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
