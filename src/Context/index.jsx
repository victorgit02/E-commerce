import React, { createContext, useState, useEffect } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // SHOPPING CART - INCREMENT QUANTITY
  const [count, setCount] = useState(0);

  // PRODUCT DETAIL OPEN/CLOSE
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Checkout Side Menu
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);

  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // PRODUCT DETAIL SHOW PRODUCT
  const [productToShow, setProductToShow] = useState({});

  // SHOPPING CART - ADD PRODUCTS TO CART
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping Cart - Order
  const [order, setOrder] = useState([]);

  // Get Products
  const [items, setItems] = useState(null);
  console.log(items);
  const [filteredItems, setFilteredItems] = useState(null);

  // getProducts By Title
  const [searchByTitle, setSearchByTitle] = useState(null);

  // get Products by category
  const [searchByCategory, setSearchByCategory] = useState(null);
  console.log('filteredItems:', filteredItems);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === 'BY_TITLE') {
      return filteredItemsByTitle(items, searchByTitle);
    }
    if (searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory);
    }
    if (!searchType) {
      return items;
    }
  };

  useEffect(() => {
    if (searchByTitle && searchByCategory) {
      setFilteredItems(
        filterBy(
          'BY_TITLE_AND_CATEGORY',
          items,
          searchByTitle,
          searchByCategory
        )
      );
    } else if (searchByTitle && !searchByCategory) {
      setFilteredItems(
        filterBy('BY_TITLE', items, searchByTitle, searchByCategory)
      );
    } else if (!searchByTitle && searchByCategory) {
      setFilteredItems(
        filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory)
      );
    } else if (!searchByTitle && !searchByCategory) {
      setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
    }
  }, [items, searchByTitle, searchByCategory]);

  console.log('searchybtit', searchByTitle);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
        openCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        searchByCategory,
        setSearchByCategory,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
