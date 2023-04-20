import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { Box, CircularProgress } from '@mui/material';

const context = createContext();
export const useProducts = () => useContext(context);

export function ProductsProvider({ children }) {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        axios
            .get('https://ecommercebackend.fundamentos-29.repl.co/')
            .then((response) => {
                setTimeout(() => setProducts(response.data), 500);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <context.Provider value={products}>
            {!products ? (
                <Box display="flex" justifyContent="center" p={10}>
                    <CircularProgress />
                </Box>
            ) : (
                children
            )}
        </context.Provider>
    );
}
