import { useEffect } from 'react';
import useSWR from 'swr';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../config/axios';

export const useAuth = ({ middleware, url }) => {
  const token = localStorage.getItem('AUTH_TOKEN');
  const navigate = useNavigate();

  const {
    data: user,
    error,
    mutate,
  } = useSWR('/user', () => {
    axiosInstance('/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.data)
      .catch(err => {
        throw Error(err?.response?.data?.errors);
      });
  });

  const register = async () => {};

  const login = async (datos, setError) => {
    try {
      const { data } = await axiosInstance.post('/login', datos);
      localStorage.setItem('AUTH_TOKEN', data.token);
      setError([]);
      await mutate();
    } catch (error) {
      setError(Object.values(error.response.data.errors));
    }
  };

  console.log(user);
  console.log(error);
  const logout = async () => {};

  useEffect(() => {
    if (user && url && middleware === 'guest') {
      navigate(url);
    }
  }, [user, error]);

  return {
    login,
    register,
    logout,
  };
};
