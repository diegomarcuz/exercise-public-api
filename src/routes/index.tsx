import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from 'pages/Home';
import NotFound from 'pages/Errors';
import ProductDetail from 'pages/ProductDetail';
import Products from 'pages/Products';
import Layout from 'components/templates/Layout';
import { ROUTES } from './config';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: ROUTES.PRODUCTS,
        children: [
          {
            path: ':productId',
            Component: ProductDetail,
          },
          {
            index: true,
            Component: Products,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    Component: NotFound,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
