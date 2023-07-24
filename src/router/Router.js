import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/pages/Layout"
import Home from "../components/pages/home";
import ArticleList from "../components/pages/ArticleList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/articles" element={<ArticleList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
