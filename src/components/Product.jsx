import { formatMoney } from "../helpers";
export default function Product({ product }) {
  const { image, name, price } = product;

  return (
    <div className="border p-3 shadow-sm bg-ghost-white">
      <img src={`/img/${image}.jpg`} className="w-full" alt="{`imagen ${name}`}" />
      <div className="mt-4 p-5">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="mt-5 font-black text-4xl text-purpureus">{formatMoney(price)}</p>

        <button type="button" 
        className="w-full mt-4 uppercase cursor-pointer bg-orange-crayola text-ghost-white font-bold p-3 rounded-md hover:bg-black hover:text-ghost-white"
        >Agregar</button>
      </div>
    </div>
  )
}
