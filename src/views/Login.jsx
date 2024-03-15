import { Link } from "react-router-dom";
export default function Login() {
    return (
        <>
        <h1 className="text-4xl font-black">Iniciar sesión</h1>
        <p>Para crear un pedido debes iniciar sesión</p>

        <div className="mt-10 shadow-md rounded-md px-5 py-10 bg-ghost-white">
            <form action="">
                <div className="mb-5">
                    <label htmlFor="email" className="text-black block text-sm font-semibold">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Tu e-mail" className="w-full mt-1 p-2 border border-gray-300 rounded-md" />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="text-black block text-sm font-semibold">Contraseña:</label>
                    <input type="password" id="password" name="password" placeholder="Tu contraseña" className="w-full mt-1 p-2 border border-gray-300 rounded-md" />
                </div>
                <div>
                    <button type="submit" className="w-full mt-4 uppercase cursor-pointer bg-orange-crayola text-black font-bold p-3 rounded-md hover:bg-royal-purple hover:text-ghost-white">
                        Iniciar sesión
                        </button>
                </div>
            </form>
        </div>
        <nav className="mt-5">
            <Link to="/auth/register" className="text-gray">
                ¿No tienes cuenta? Regístrate
            </Link>
        </nav>
    </>
    )
}