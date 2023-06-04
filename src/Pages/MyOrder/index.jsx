import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../components/Layout/index";
import OrderCard from "../../components/OrderCard";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);

  if (index === "last") index = context.order?.lenght - 1

  return (
    <Layout>
      <div className="flex w-80  justify-center items-center relative mb-6">
        <Link to="/myorders" className="absolute left-0">
          <ChevronLeftIcon className="w-6 h-6 text-black cursor-pointer"></ChevronLeftIcon>
        </Link>

        <h1>MyOrder</h1>
      </div>

      <div className="flex flex-col w-80">
        {context.order?.[index]?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageURL={product.images}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;
