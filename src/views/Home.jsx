import useSWR from "swr";
//import { products as data } from "../data/products";
import Product from "../components/Product";
import useKiosk from "../hooks/useKiosk";
import axiosInstance from "../config/axios";

export default function Home() {
  const { selectedCategory } = useKiosk();

  // Consulta SWR
  const fetcher = () => axiosInstance("/products").then((data) => data.data);
  const { data, error, isLoading } = useSWR("/products", fetcher, {
    refreshInterval: 1000,
  });

  if (isLoading) return <p>Cargando...</p>;

  const products = data.data.filter(
    (product) => product.category_id === selectedCategory.id,
  );

  return (
    <>
      <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <Product key={product.image} product={product} />
        ))}
      </div>
    </>
  );
}
