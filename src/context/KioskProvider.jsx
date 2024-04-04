import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { categories as categoriesDB } from "../data/categories";

const KioskContext = createContext();

const KioskProvider = ({ children }) => {
    const [categories, setCategories] = useState(categoriesDB);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState({});
    const [order, setOrder] = useState([]);

    const handleClickCategory = (id) => {
        const category = categories.filter((cat) => cat.id === id)[0];
        setSelectedCategory(category);
    };

    const handleClickModal = () => {
        setModal(!modal);
    };

    const handleSetProduct = (product) => {
        setProduct(product);
    };

    const handleAddOrder = ({ category_id, image, ...product }) => {
        if (order.some(orderState => orderState.id === product.id)) {
            const orderUpdated = order.map(orderState => orderState.id === product.id
                ? product : orderState);
            setOrder(orderUpdated);
            toast.info("Pedido actualizado");
        } else {
            setOrder([...order, product]);
            toast.success("Producto agregado al pedido");
        }
    };

    return (
        <KioskContext.Provider
            value={{
                categories,
                selectedCategory,
                handleClickCategory,
                modal,
                handleClickModal,
                product,
                handleSetProduct,
                order,
                handleAddOrder,
            }}
        >
            {children}
        </KioskContext.Provider>
    );
};

export { KioskProvider };
export default KioskContext;
