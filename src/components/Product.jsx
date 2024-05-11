import { formatMoney } from '../helpers';
import useKiosk from '../hooks/useKiosk';

export default function Product({
  product,
  addButton = false,
  availableButton = false,
}) {
  const { handleClickModal, handleSetProduct, handleClickSoldOutProduct } =
    useKiosk();
  const { image, name, price } = product;

  return (
    <div className="border p-3 shadow-sm bg-ghost-white">
      <img
        src={`/img/${image}.jpg`}
        className="w-full"
        alt="{`imagen ${name}`}"
      />
      <div className="mt-4 p-5">
        <h3 className="text-2xl font-bold text-black">{name}</h3>
        <p className="mt-5 font-black text-4xl text-purpureus">
          {formatMoney(price)}
        </p>

        {addButton && (
          <button
            type="button"
            onClick={() => {
              handleClickModal();
              handleSetProduct(product);
            }}
            className="w-full mt-4 uppercase cursor-pointer bg-orange-crayola text-ghost-white font-bold p-3 rounded-md hover:bg-black hover:text-ghost-white"
          >
            Agregar
          </button>
        )}
        {availableButton && (
          <button
            type="button"
            className="w-full mt-4 uppercase cursor-pointer bg-orange-crayola text-ghost-white font-bold p-3 rounded-md hover:bg-black hover:text-ghost-white"
            onClick={() => handleClickSoldOutProduct(product.id)}
          >
            Producto agotado
          </button>
        )}
      </div>
    </div>
  );
}
