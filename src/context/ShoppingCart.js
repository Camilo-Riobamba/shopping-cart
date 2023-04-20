import { createContext, useContext, useState } from 'react';

const context = createContext();

export const useShoppingCart = () => useContext(context);
export function ShoppingCart({ children }) {
    const [products, setProducts] = useState(
        JSON.parse(localStorage.getItem('shoppingCart')) || []
    );

    const addProduct = (newProduct) => {
        setProducts((products) => {
            if (products.find((current) => current.id === newProduct.id))
                return products;

            const newValue = [...products, newProduct];

            localStorage.setItem('shoppingCart', JSON.stringify(newValue));
            return newValue;
        });
    };

    const removeProduct = (product) => {
        setProducts((products) => {
            const newValue = products.filter(
                (current) => current.id !== product.id
            );

            localStorage.setItem('shoppingCart', JSON.stringify(newValue));
            return newValue;
        });
    };

    return (
        <context.Provider value={{ products, addProduct, removeProduct }}>
            {children}
        </context.Provider>
    );
}
