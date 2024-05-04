import { useEffect } from "react";
import useSWR from "swr";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../config/axios";

export const useAuth = ({ middleware, url }) => {
  const token = localStorage.getItem("AUTH_TOKEN");
  const navigate = useNavigate();

  const {
    data: user,
    error,
    mutate,
  } = useSWR("/user", () => {
    return axiosInstance("/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.data)
      .catch((err) => {
        throw Error(err?.response?.data?.errors);
      });
  });

  const register = async (datos, setError) => {
    try {
      const { data } = await axiosInstance.post("/register", datos);
      localStorage.setItem("AUTH_TOKEN", data.token);
      setError([]);
      await mutate();
    } catch (error) {
      setError(Object.values(error.response.data.errors));
    }
  };

  const login = async (datos, setError) => {
    try {
      const { data } = await axiosInstance.post("/login", datos);
      localStorage.setItem("AUTH_TOKEN", data.token);
      setError([]);
      await mutate();
    } catch (error) {
      setError(Object.values(error.response.data.errors));
    }
  };

  useEffect(() => {
    if (middleware === "guest" && user && url) {
      navigate(url);
    }
    if (middleware === "guest" && user && user.admin) {
      navigate("/admin");
    }
    if (middleware === "admin" && user && !user.admin) {
      navigate("/");
    }
    if (middleware === "auth" && error) {
      navigate("/auth/login");
    }
  }, [user, error]);

  const logout = async () => {
    try {
      await axiosInstance.post("/logout", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem("AUTH_TOKEN");
      await mutate(undefined);
    } catch (error) {
      throw Error(error?.response?.data?.errors);
    }
  };

  return {
    login,
    register,
    logout,
    user,
    error,
  };
};
