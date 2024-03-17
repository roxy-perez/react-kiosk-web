import Category from "./Category";
import { categories } from "../data/categories";

export default function Sidebar() {
  return (
    <aside className="md:w-72">
      <div className="p-4">
        <img className="w-40" src="img/logo.svg" alt="Logo" />
      </div>

      <div className="mt-10">
        {categories.map((cat) => (
          <Category category={cat} />
        ))}
      </div>

      <div className="mx-2 my-4 p-2 bg-royal-purple text-ghost-white rounded-md cursor-pointer hover:bg-orange-crayola hover:text-black">
        <button type="button" className="w-full text-center uppercase font-bold rounded-lg truncate">
          Cancelar pedido
        </button>
      </div>
    </aside>
  );
}
