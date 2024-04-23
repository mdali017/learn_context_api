import React, { useState } from "react";
import { createContext } from "react";
import { dataProducts } from "./appData";

export const ProductContent = createContext();

const ProductProvider = ({ children, prodInDetails }) => {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  // const localProducts = {
  //   products: dataProducts,
  //   detailProduct: prodInDetails,
  // };

  return (
    <ProductContent.Provider value={{ cartItems, addToCart }}>
      {children}
    </ProductContent.Provider>
  );
};

export default ProductProvider;
