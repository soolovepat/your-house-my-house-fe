import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/pages/home/Home";
// import ArticleList from "../components/pages/articleList/ArticleList";
import ArticleList from "../components/pages/articlePage/ArticlePage";
import ArticlePage from "../components/pages/articlePage/ArticlePage";
// import Layout from "../components/pages/layout/Layout";
import Layout from "../components/pages/Layout/Layout";
import Write from "../components/pages/write/Write";
import LoginPage from "../components/pages/logninPage/LoginPage";
import SignupPage from "../components/pages/signupPage/SignupPage";
import ProtectedRoute from "./ProtectedRoute";
import ItemDetail from "../components/pages/itemDetail/ItemDetail";
import ItemList from "../components/pages/itemList/ItemList";

import { DataProvider } from "../components/pages/write/hooks/useData";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/article" element={<ArticleList />} />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/:id" element={<ArticlePage />} />
          <Route path="/item/:itemId" element={<ItemDetail />} />
          <Route path="/item/category" element={<ItemList />} />
        </Route>
        <Route
          path="/write"
          element={
            <ProtectedRoute
              element={
                <DataProvider>
                  <Write />
                </DataProvider>
              }
            />
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
