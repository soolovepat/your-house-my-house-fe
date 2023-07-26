import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Cookies, useCookies } from "react-cookie";

const ProtectedRoute = ({ element }) => {
  const navigate = useNavigate();
  const [authentication, setAuthentication] = useState(false);
  const cookies = new Cookies();
  // const [cookies, setCookies] = useCookies();
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
    const token = cookies.get("cookieId", { path: "/" });
    console.log("토큰", "=", token);
    if (!token) return false;
    try {
      const userInfo = await CheckUserInfo(token);
      console.log("userInfo", userInfo);
      return userInfo ? true : false;
    } catch {
      alert("로그인유효성검사 실패");
      return false;
    }
  };
  //   //protectedRoute에서 사용하는 함수입니다.
  //   //로그인 상태를 체크합니다.

  const CheckUserInfo = async (token) => {
    console.log("토큰", token);
    try {
      const currentUserToken = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `/api/auth/checkout`,
        currentUserToken
      );
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
