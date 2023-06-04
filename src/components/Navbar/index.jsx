import { NavLink } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import { useContext } from 'react';

function Navbar() {
  const context = useContext(ShoppingCartContext);
  const activeStyle = 'underline underline-offset-4';
  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            onClick={() => context.setSearchByCategory('clothes')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            onClick={() => context.setSearchByCategory('electronics')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/fornitures'
            onClick={() => context.setSearchByCategory('fornitures')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Fornitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys'
            onClick={() => context.setSearchByCategory('toys')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            onClick={() => context.setSearchByCategory('others')}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3 '>
        <li className='text-black/60'>victorareiza@gmail.com</li>
        <li>
          <NavLink
            to='/myorders'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            MyOrders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/myaccount'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/signin'
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li className='flex items-center'>
          <ShoppingBagIcon className='w-6 h-6 text-black ' />
          <div>{context.cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
