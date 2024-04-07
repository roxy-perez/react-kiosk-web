import useKiosk from "../hooks/useKiosk";
import ProductSummary from "./ProductSummary";
import { formatMoney } from "../helpers";

export default function Summary() {
  const { order, total } = useKiosk();
  const checkOrder = () => order.length === 0;

  return (
    <aside className="w-72 h-screen overflow-y-scroll p-5">
      <h1 className="text-4xl font-black">Mi pedido</h1>
      <p className="text-lg my-5">
        Aquí podrás ver el resumen y totales de tu pedido
      </p>
      <div className="py-10">
        {order.length === 0 ? (
          <p className="text-lg text-center">
            No hay productos en tu pedido aún
          </p>
        ) : (
          order.map((product) => (
            <ProductSummary key={product.id} product={product} />
          ))
        )}
      </div>
      <p className="text-xl mt-10">
        Total: {""}
        <span className="text-royal-purple font-bold">
          {formatMoney(total)}
        </span>
      </p>
      <form className="w-full">
        <div className="w-full">
          <input
            type="submit"
            className={`${checkOrder() ? 'bg-gray-light cursor-not-allowed' : 'bg-royal-purple hover:bg-purpureus'} 
            w-full text-ghost-white px-5 py-2 rounded-md uppercase font-bold text-center cursor-pointer mt-5`}
            value="Confirmar pedido"
            disabled={checkOrder()}
          />
        </div>
      </form>
    </aside>
  );
}
