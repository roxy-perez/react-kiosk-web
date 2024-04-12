import { products as data } from "../data/products";
import Product from "../components/Product";
import useKiosk from "../hooks/useKiosk";

export default function Home() {
    const { selectedCategory } = useKiosk();
    const products = data.filter(product => product.category_id === selectedCategory.id);

    return (
        <>
            <h1 className="text-4xl font-black">{selectedCategory.name}</h1>
            <p className="text-lg">Elige y personaliza tu pedido.</p>

            <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 xl:grid-cols-3">
                {products.map(product => (
                    <Product key={product.image} product={product} />
                ))}
            </div>
        </>
    );
}
