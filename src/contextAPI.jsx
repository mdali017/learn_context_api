import React, { useState } from "react";
import { createContext } from "react";
import { dataProducts } from "./appData";
import { v4 as uuidv4 } from "uuid";

export const ProductContent = createContext();

const ProductProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  // console.log(cartItems);

  const addToCart = (item) => {
    // setCartItems([...cartItems, item]);
    const newItem = { ...item, id: uuidv4() };
    setCartItems([...cartItems, newItem]);
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };
  // const localProducts = {
  //   products: dataProducts,
  //   detailProduct: prodInDetails,
  // };

  return (
    <ProductContent.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </ProductContent.Provider>
  );
};

export default ProductProvider;
