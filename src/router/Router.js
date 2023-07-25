import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/pages/layout";
import Home from "../components/pages/home";
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
