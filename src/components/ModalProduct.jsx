import { useState, useEffect } from "react";
import useKiosk from "../hooks/useKiosk";
import { formatMoney } from "../helpers";

export default function ModalProduct() {
  const { product, handleClickModal, handleAddOrder, order } = useKiosk();
  const [amount, setAmount] = useState(1);
  const [orderEdition, setOrderEdition] = useState(false);

  useEffect(() => {
    if (order.some((orderState) => orderState.id === product.id)) {
      const orderUpdated = order.filter(orderState => orderState.id === product.id)[0];
      setAmount(orderUpdated.amount);
      setOrderEdition(true);
    }
  }, [order]);

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3 relative mr-4">
        <img
          src={`/img/${product.image}.jpg`}
          alt={`imagen producto ${product.name}`}
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleClickModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-black hover:text-violet-jtc"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <h2 className="text-violet-jtc text-2xl font-semibold mt-5">
          {product.name}
        </h2>
        <p className="mt-5 font-black text-5xl text-orange-crayola">
          {formatMoney(product.price)}
        </p>
        <div className="flex gap-4 mt-5">
          <button
            type="button"
            onClick={() => {
              if (amount <= 1) return;
              setAmount(amount - 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-black"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <p className="text-gray-light text-2xl font-bold">{amount}</p>
          <button
            type="button"
            onClick={() => {
              if (amount >= 6) return;
              setAmount(amount + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-black"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <button
          type="button"
          className="mt-5 bg-violet-jtc text-ghost-white font-bold py-2 px-4 uppercase rounded-lg hover:bg-purpureus"
          onClick={() => {
            handleAddOrder({ ...product, amount })
            handleClickModal()
          }}
        >
          {orderEdition ? "Guardar cambios" : "Añadir al pedido"}
        </button>
      </div>
    </div>
  );
}
