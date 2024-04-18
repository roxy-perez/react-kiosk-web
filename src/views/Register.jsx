import { Link } from 'react-router-dom';
import { createRef, useState } from 'react';
import axiosInstance from '../config/axios';

export default function Register() {
  const nameRef = createRef();
  const emailRef = createRef();
  const passwordlRef = createRef();
  const passwordConfirmationRef = createRef();

  const handleSubmit = async e => {
    e.preventDefault();

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordlRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };
    try {
      const response = await axiosInstance.post('/register', data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-4xl font-black">Crea tu cuenta</h1>
      <p>Crea tu cuenta rellenando el formulario</p>

      <div className="mt-10 shadow-md rounded-md px-5 py-10 bg-ghost-white">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="text-black block text-sm font-semibold"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre"
              ref={nameRef}
              className="w-full mt-1 p-2 border border-gray-light rounded-md"
            />
          </div>
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
              ref={passwordlRef}
              placeholder="Tu contraseña"
              className="w-full mt-1 p-2 border border-gray-light rounded-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password_confirmation"
              className="text-black block text-sm font-semibold"
            >
              Repetir Contraseña:
            </label>
            <input
              type="password"
              id="password_confirmation"
              name="password_confirmation"
              placeholder="Repetir contraseña"
              ref={passwordConfirmationRef}
              className="w-full mt-1 p-2 border border-gray-light rounded-md"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full mt-4 uppercase cursor-pointer bg-royal-purple text-ghost-white font-bold p-3 rounded-md hover:bg-orange-crayola hover:text-black"
            >
              Crear cuenta
            </button>
          </div>
        </form>
      </div>
      <nav className="mt-5">
        <Link to="/auth/login" className="text-gray-light">
          ¿Ya tienes cuenta? Inicia sesión
        </Link>
      </nav>
    </>
  );
}
