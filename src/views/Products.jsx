import useSWR from 'swr';
import axiosInstance from '../config/axios';
import Product from '../components/Product';

export default function Products() {
  const token = localStorage.getItem('AUTH_TOKEN');
  const fetcher = () =>
    axiosInstance('/products', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(datos => datos.data);

  const { data, error, isLoading } = useSWR('/products', fetcher, {
    refreshInterval: 10000,
  });
  if (isLoading) return <p>Cargando...</p>;
  console.log(data);

  return (
    <div>
      <h1 className="text-4xl font-black">Productos</h1>
      <p className="text-lg">Controla la disponibilidad desde aquí.</p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-clos-3">
        {data.data.map(product => (
          <Product
            key={product.image}
            product={product}
            availableButton={true}
          />
        ))}
      </div>
    </div>
  );
}
