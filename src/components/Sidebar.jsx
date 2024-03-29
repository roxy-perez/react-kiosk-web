import useKiosk from "../hooks/useKiosk";
import Category from "./Category";
import { categories as categoriesData } from "../data/categories";

export default function Sidebar() {
  const { categories } = useKiosk();

  return (
    <aside className="md:w-72">
      <div className="p-4">
        <img className="w-40" src="img/logo.svg" alt="Logo" />
      </div>

      <div className="mt-10">
        {categories.map(category => (
          <Category key={category.id} category={category} />
        ))}
      </div>

      <div className="mx-2 my-4 p-2 bg-royal-purple text-ghost-white rounded-md cursor-pointer hover:bg-orange-crayola">
        <button
          type="button"
          className="w-full text-center uppercase font-bold rounded-lg truncate"
        >
          Cancelar pedido
        </button>
      </div>
    </aside>
  );
}
