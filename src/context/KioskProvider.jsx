import { createContext, useState } from "react";
import { categories as categoriesDB } from "../data/categories";

const KioskContext = createContext();

const KioskProvider = ({ children }) => {
    const [categories, setCategories] = useState(categoriesDB);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState({});

    const handleClickCategory = id => {
        const category = categories.filter(cat => cat.id === id)[0];
        setSelectedCategory(category);
    };

    const handleClickModal = () => {
        setModal(!modal);
    };

    const handleSetProduct = product => {
        setProduct(product);
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
            }}
        >
            {children}
        </KioskContext.Provider>
    );
};

export { KioskProvider };
export default KioskContext;
