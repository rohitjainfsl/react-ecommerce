/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ecomContext } from "../Home";

function Product({ product }) {
  const { handleAddToCart } = useContext(ecomContext);

  return (
    <div className="product">
      <div className="product-photo">
        <img src={product.image} alt="Product Image" />
      </div>
      <div className="content">
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        <Link to="" onClick={() => handleAddToCart(product)}>
          Add To Cart
        </Link>
      </div>
    </div>
  );
}

export default Product;
