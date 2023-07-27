import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import api from "../api/api";

const ProtectedRoute = ({ element }) => {
  const navigate = useNavigate();
  const [authentication, setAuthentication] = useState(false);

  useEffect(() => {
    const LoginStatusCheck = async () => {
      const loginStatus = await LoginStatus();
      setAuthentication(loginStatus);
      if (!loginStatus) {
        navigate("/login");
      }
    };
    LoginStatusCheck();
  }, [navigate]);

  const LoginStatus = async () => {
    const token = localStorage.getItem("token");

    if (!token) return false;
    try {
      const userInfo = await CheckUserInfo(token);

      return userInfo ? true : false;
    } catch {
      alert("로그인유효성검사 실패");
      return false;
    }
  };

  const CheckUserInfo = async (token) => {
    try {
      const currentUserToken = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      };
      const { data } = await api.get(`/auth/checkout`, currentUserToken);
      return data.success;
    } catch {
      console.log("failed");
      //   alert(e.response.data.msg);
    }
  };
  console.log(authentication);
  return authentication ? element : console.log("인증 실패");
};

export default ProtectedRoute;
