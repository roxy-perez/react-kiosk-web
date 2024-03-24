import { createContext, useState } from "react";
import { categories as categoriesDB } from "../data/categories";

const KioskContext = createContext();

const KioskProvider = ({ children }) => {
    const [categories, setCategories] = useState(categoriesDB);
    const [selectedCategory, setSelectedCategory] = useState(categoriesDB[0]);

    const handleClickCategory = id => {
        const category = categories.filter(cat => cat.id === id)[0];
        setSelectedCategory(category);
    };

    return (
        <KioskContext.Provider
            value={{ categories, selectedCategory, handleClickCategory }}
        >
            {children}
        </KioskContext.Provider>
    );
};

export { KioskProvider };
export default KioskContext;
