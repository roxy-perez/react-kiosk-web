import { Link } from 'react-router-dom';
import { createRef, useState } from 'react';
import axiosInstance from '../config/axios';
import Alert from '../components/Alert';

export default function Login() {
  const emailRef = createRef();
  const passwordlRef = createRef();

  const [error, setError] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();

    const datos = {
      email: emailRef.current.value,
      password: passwordlRef.current.value,
    };
    try {
      const { data } = await axiosInstance.post('/login', datos);
      localStorage.setItem('AUTH_TOKEN', data.token);
      setError([]);
    } catch (error) {
      setError(Object.values(error.response.data.errors));
    }
  };

  return (
    <>
      <h1 className="text-4xl font-black">Iniciar sesión</h1>
      <p>Para crear un pedido debes iniciar sesión</p>

      <div className="mt-10 shadow-md rounded-md px-5 py-10 bg-ghost-white">
        <form onSubmit={handleSubmit} noValidate>
          {error
            ? error.map(error => <Alert key={error}>{error}</Alert>)
            : null}

          <div className="mb-5">
            <label
              htmlFor="email"
              className="text-black block text-sm font-semibold"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu e-mail"
              ref={emailRef}
              className="w-full mt-1 p-2 border border-gray-light rounded-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="text-black block text-sm font-semibold"
            >
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu contraseña"
              ref={passwordlRef}
              className="w-full mt-1 p-2 border border-gray-light rounded-md"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full mt-4 uppercase cursor-pointer bg-orange-crayola text-black font-bold p-3 rounded-md hover:bg-royal-purple hover:text-ghost-white"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
      <nav className="mt-5">
        <Link to="/auth/register" className="text-gray-light">
          ¿No tienes cuenta? Regístrate
        </Link>
      </nav>
    </>
  );
}
