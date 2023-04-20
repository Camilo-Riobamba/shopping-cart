//config
import 'normalize.css';
import 'styles.css';

import { useState } from 'react';

import { Outlet } from 'react-router-dom';
import { ProductsProvider } from 'context/ProductsProvider';
import { ShoppingCart } from 'context/ShoppingCart';

import SideBar from 'components/Sidebar';
import Header from 'components/Header';

function App() {
    const [open, setOpen] = useState(false);

    return (
        <ProductsProvider>
            <Header onClick={() => setOpen(true)} />

            <ShoppingCart>
                <SideBar open={open} handler={setOpen} />

                <Outlet />
            </ShoppingCart>
        </ProductsProvider>
    );
}

export default App;
