import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { withMiddleware } from "swr/_internal";
export default function AdminSidebar() {
  const { logout } = useAuth({ middleware: 'auth' });
  return (
    <aside className="md:w-72 h-screen">
      <div className="p-4">
        <img src="/img/logo.svg" alt="imagen logotipo" className="w-40" />
      </div>
      <nav className="flex flex-col p-4">
        <Link to="/admin" className="font-bold text-lg">
          Pedidos
        </Link>
        <Link to="/admin/products" className="font-bold text-lg">
          Productos
        </Link>
      </nav>
      <div className="my-5 px-5">
        <button
          className="text-center bg-orange-crayola w-full p-3 font-bold text-ghost-white truncate"
          onClick={logout}
        >
          Cerrar Sesión
        </button>
      </div>
    </aside>
  );
}
