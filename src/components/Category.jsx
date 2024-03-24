import useKiosk from "../hooks/useKiosk";
export default function Category({ category }) {

  const { handleClickCategory, selectedCategory } = useKiosk();
  const { icon, id, name } = category;
  const highlightCategory = () =>
    selectedCategory.id === id ? "bg-orange-crayola" : "bg-ghost-white";

  return (
    <div
      className={`${highlightCategory()} flex items-center gap-4 p-2 m-1 cursor-pointer hover:bg-orange-crayola-light border rounded-lg border-gray-light`}
    >
      <img src={`/img/icono_${icon}.svg`} alt="Imagen ícono" className="w-12" />
      <button
        type="button"
        onClick={() => handleClickCategory(id)}
        className="text-lg font-bold cursor-pointer truncate"
      >
        {name}
      </button>
    </div>
  );
}
