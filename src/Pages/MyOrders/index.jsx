import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../components/Layout/index';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import OrdersCard from '../../components/OrdersCard';

function MyOrders() {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className='flex w-80  justify-center items-center relative'>
        <h1 className='font-medium text-xl'>My Orders</h1>
      </div>

      {context.order.map((order, index) => (
        <Link key={index} to={`/myorders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
