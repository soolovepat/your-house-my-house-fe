import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/pages/layout/Layout";
import Home from "../components/pages/home/Home";
import Write from "../components/pages/write/Write";
import ArticleList from "../components/pages/articleList/ArticleList";
import ArticlePage from "../components/pages/articlePage/ArticlePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:id" element={<ArticlePage />} />
        </Route>
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
