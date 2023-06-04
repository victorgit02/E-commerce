import { data } from 'autoprefixer';
import { useContext } from 'react';
import Card from '../../components/Card';
import ProductDetail from '../../components/ProductDetail/index';
import Layout from '../../components/Layout/index';
import { ShoppingCartContext } from '../../Context';

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (context.filteredItems?.map(item => (
        <Card key={item.id} data={item} />
      )));
    } else {
      return (<div>....</div>
    )}
    
  };

  return (
    <Layout>
      <div className='flex w-80  justify-center items-center relative'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>
      <input
        type='text'
        placeholder='Search a product'
        className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />

      <div className='grid gap-3 grid-cols-4 w-full max-w-screen-lg'>
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}
export default Home;
