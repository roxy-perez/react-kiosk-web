import { useAuth } from "../hooks/useAuth";
import useKiosk from "../hooks/useKiosk";
import Category from "./Category";

export default function Sidebar() {
  const { categories } = useKiosk();
  const { user, logout } = useAuth({ middleware: "auth" });

  return (
    <aside className="md:w-72">
      <div className="p-4">
        <img className="w-40" src="img/logo.svg" alt="Logo" />
      </div>

      <p className="my-10 text-center">
        Hola,{" "}
        <span className="text-2xl text-bold text-violet-jtc">{user?.name}</span>
      </p>

      <div className="mt-10">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>

      <div className="mx-2 my-4 p-2 bg-royal-purple text-ghost-white rounded-md cursor-pointer hover:bg-orange-crayola">
        <button
          type="button"
          className="w-full text-center uppercase font-bold rounded-lg truncate"
          onClick={logout}
        >
          Cancelar pedido
        </button>
      </div>
    </aside>
  );
}
