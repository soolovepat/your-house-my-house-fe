import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/pages/home/Home";
import ArticleList from "../components/pages/articleList/ArticleList";
import ArticlePage from "../components/pages/articlePage/ArticlePage";
import Layout from "../components/pages/layout/Layout";
import Write from "../components/pages/write/Write";
import LoginPage from "../components/pages/logninPage/LoginPage";
import SignupPage from "../components/pages/signupPage/SignupPage";
import ProtectedRoute from "./ProtectedRoute";
import ItemDetail from "../components/pages/itemDetail/ItemDetail";
import ItemList from "../components/pages/itemList/ItemList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:id" element={<ArticlePage />} />
          <Route
            path="/write"
            element={<ProtectedRoute element={<Write />} />}
          />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/write" element={<Write />} />
        <Route path="/item/:itemId" element={<ItemDetail />}></Route>
        <Route path="/item/category" element={<ItemList />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
