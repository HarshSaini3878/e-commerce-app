import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [Auth,SetAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
        const apiUrl = process.env.REACT_APP_API || "http://localhost:8080";
        const res = await axios.get(`${apiUrl}/api/v1/auth/admin-auth`);
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (Auth?.token) authCheck();
  }, [Auth?.token]);

  return ok ? <Outlet /> : <Spinner path="" />;
}