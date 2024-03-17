import { Link } from "react-router-dom";

export default function Register() {
    return (
        <>
            <h1 className="text-4xl font-black">Crea tu cuenta</h1>
            <p>Crea tu cuenta rellenando el formulario</p>

            <div className="mt-10 shadow-md rounded-md px-5 py-10 bg-ghost-white">
                <form action="">
                    <div className="mb-5">
                        <label htmlFor="name" className="text-black block text-sm font-semibold">Nombre:</label>
                        <input type="text" id="name" name="name" placeholder="Tu nombre" className="w-full mt-1 p-2 border border-gray-light rounded-md" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="text-black block text-sm font-semibold">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Tu e-mail" className="w-full mt-1 p-2 border border-gray-light rounded-md" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="text-black block text-sm font-semibold">Contraseña:</label>
                        <input type="password" id="password" name="password" placeholder="Tu contraseña" className="w-full mt-1 p-2 border border-gray-light rounded-md" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password_confirmation" className="text-black block text-sm font-semibold">Repetir Contraseña:</label>
                        <input type="password" id="password_confirmation" name="password_confirmation" placeholder="Repetir contraseña" className="w-full mt-1 p-2 border border-gray-light rounded-md" />
                    </div>
                    <div>
                        <button type="submit" className="w-full mt-4 uppercase cursor-pointer bg-royal-purple text-ghost-white font-bold p-3 rounded-md hover:bg-orange-crayola hover:text-black">
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
    )
}
