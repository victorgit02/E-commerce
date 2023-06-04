import { useRoutes, BrowserRouter } from 'react-router-dom';
import {ShoppingCartProvider} from '../../Context';
import Home from '../Home/index';
import MyAccount from '../MyAccount/index';
import MyOrder from '../MyOrder/index';
import MyOrders from '../myOrders/index';
import NotFound from '../NotFound/index';
import SignIn from '../SignIn/index';
import Navbar from '../../components/NavBar/index.jsx';
import CheckoutSideMenu from '../../components/CheckOutSideMenu';
import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/',element: <Home />,},
    {path: '/clothes',element: <Home />,},
    {path: '/electronics',element: <Home />,},
    {path: '/fornitures',element: <Home />,},
    {path: '/toys',element: <Home />,},
    {path: '/others',element: <Home />,},
    {path: '/MyAccount',element: <MyAccount />,},
    {path: '/MyOrder',element: <MyOrder />,},
    {path: '/MyOrders',element: <MyOrders />,},
    {path: '/myorders/last',element: <MyOrders />,},
    {path: '/myorders/:id',element: <MyOrder/>,},
    {path: '/*',element: <NotFound />,},
    {path: '/SignIn',element: <SignIn />,},
  ]);
  return routes;
};

const App = () => {
  return (
    <ShoppingCartProvider>
    <BrowserRouter>
      <AppRoutes />
      <Navbar/>
      <CheckoutSideMenu/>
    </BrowserRouter>
    </ShoppingCartProvider >
  );
};

export default App;
