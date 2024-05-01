
import { createBrowserRouter } from 'react-router-dom';


import Error from '../Components/Error/Error';

import EstateDetails from '../Components/EstateDetails/EstateDetails.jsx';

import ForgotPassword from '../Components/ForgotPassword/ForgotPassword.jsx';
import Home from '../Components/Home/Home';
// import ServicesDetails from '../Components/Home/Services/ServicesDetails.jsx';
import Layout from '../Components/Layout/Layout';
import Login from '../Components/Login/Login';
import Signup from '../Components/Signup/Signup';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AllCraft from '../Components/AllCraft/AllCraftItems.jsx';
import AddProducts from '../Components/AddProducts.jsx';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,

      },
      
     
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: '/estate-details',
        element: (
          <PrivateRoute>
            <EstateDetails />
          </PrivateRoute>
        ),
       
      },
      {
        path: '/all-craft',
        element: (
          <PrivateRoute>
            <AllCraft />
          </PrivateRoute>
        ),
      },

      {
        path: '/add-products',
        element: (
          <PrivateRoute>
            <AddProducts />
          </PrivateRoute>
        ),
      },
  
     
    ],
  },
]);

export default routes;
