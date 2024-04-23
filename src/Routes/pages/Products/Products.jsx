import React, { useContext, useState } from "react";
import { ProductContent } from "../../../contextAPI";
import { dataProducts } from "../../../appData";

const Products = () => {
  const { addToCart } = useContext(ProductContent);
  //   console.log(addToCart);

  const handleAddToCart = (item) => {
    // console.log(item);
    addToCart(item);
  };

  return (
    <div className="container mx-auto border">
      {/* <h1>This is my Products Page.</h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {dataProducts.map((item, index) => (
          <div key={index} className=" border">
            <div className="block">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="h-64    "
              />

              <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                Lorem, ipsum dolor.
              </h3>

              <p className="mt-2 max-w-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                reiciendis sequi ipsam incidunt.
              </p>
              <button onClick={() => handleAddToCart(item)}>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
      {/* card start here  */}

      {/* card end here  */}
    </div>
  );
};

export default Products;
