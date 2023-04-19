import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from 'App';
import ErrorPage from 'routes/ErrorPage';

export default function Routes() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <ErrorPage />,
        },
    ]);

    return <RouterProvider router={router} />;
}
