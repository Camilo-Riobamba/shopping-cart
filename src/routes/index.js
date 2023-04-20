import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from 'App';
import Home from 'components/Home';
import Product from 'components/Product';

import ErrorPage from 'routes/ErrorPage';

export default function Routes() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <ErrorPage />,

            children: [
                {
                    path: '/',
                    element: <Home />,
                },

                {
                    path: 'product/:id',
                    element: <Product />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}
