import useSWR from 'swr';
import useKiosk from '../hooks/useKiosk';
import axiosInstance from '../config/axios';
import { formatMoney } from '../helpers';

export default function Orders() {
  const token = localStorage.getItem('AUTH_TOKEN');
  const fetcher = () =>
    axiosInstance('/orders', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  const { data, error, isLoading } = useSWR('/orders', fetcher, {
    refreshInterval: 10000,
  });
  const { handleClickCompleteOrder } = useKiosk();

  if (isLoading) return <p>Cargando...</p>;

  return (
    <div>
      <h1 className="text-4xl font-black">Pedidos</h1>
      <p className="text-lg">Administra los pedidos desde aquí.</p>

      <div className="grid grid-cols-2 gap-4">
        {data?.data?.data.map(order => (
          <div
            key={order.id}
            className="bg-ghost-white shadow space-y-2 border-b p-4 my-4"
          >
            <p className="text-xl font-bold text-violet-jtc">
              Contenido del pedido:
            </p>
            {order.products.map(product => (
              <div
                key={product.id}
                className="font-mono border-b border-b-orange-crayola-light last-of-type:border-none py-4"
              >
                <p className="text-sm">ID: {product.id}</p>
                <p className="text-base font-bold text-purpureus">
                  {product.name}
                </p>
                <p className="text-sm">
                  Cantidad:{' '}
                  <span className="font-bold text-purpureus">
                    {product.pivot.amount}
                  </span>
                </p>
              </div>
            ))}
            <p className="text-base font-bold text-black">
              Cliente:{' '}
              <span className="font-normal text-gray-light text-lg">
                {order.user.name}
              </span>
            </p>
            <p className="text-base font-bold text-black">
              Total a pagar:{' '}
              <span className="font-mono text-orange-crayola text-lg">
                {formatMoney(order.total)}
              </span>
            </p>

            <button
              type="button"
              className="bg-royal-purple hover:bg-orange-crayola px-5 py-5 rounded-lg uppercase font-bold
              text-ghost-white text-center cursor-pointer mt-4 w-full"
              onClick={() => handleClickCompleteOrder(order.id)}
            >
              Completar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
