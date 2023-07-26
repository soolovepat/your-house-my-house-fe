import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/pages/home/Home";
import Write from "../components/pages/write/Write";
import ArticleList from "../components/pages/articleList/ArticleList";
import ArticlePage from "../components/pages/articlePage/ArticlePage";
import Layout from "../components/pages/layout";
import Write from "../components/pages/write"
import LoginPage from "../components/pages/logninPage/LoginPage";
import SignupPage from "../components/pages/signupPage/SignupPage";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:id" element={<ArticlePage />} />
          {/* <Route path="/write" element={<Write />} /> */}
          <Route
            path="/write"
            element={<ProtectedRoute element={<Write />} />}
          />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
