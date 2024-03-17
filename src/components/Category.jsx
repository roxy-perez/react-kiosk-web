export default function Category({ category }) {
  const { icon, id, name } = category;
  return (
    <div className="flex items-center gap-4 p-2 m-1 cursor-pointer hover:bg-orange-crayola border rounded-lg border-gray-light">
      <img
        src={`/img/icono_${icon}.svg`}
        alt="Imagen ícono"
        className="w-12"
      />
      <p className="text-lg font-bold cursor-pointer truncate">{name}</p>
    </div>
  );
}
