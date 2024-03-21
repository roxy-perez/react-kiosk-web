import { createContext } from 'react';

const KioskContext = createContext();

const KioskProvider = ({ children }) => {
    const hola = 'Hola desde el contexto';

    return (
        <KioskContext.Provider value={{ hola }}>
            {children}
        </KioskContext.Provider>
    )
}

export { KioskProvider };
export default KioskContext;