/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ecomContext } from "../Home";
import CartQty from "./CartQty";

function Product({ product }) {
  const { handleAddToCart, isProductInCart } = useContext(ecomContext);

  return (
    <div className="product">
      <div className="product-photo">
        <img src={product.image} alt="Product Image" />
      </div>
      <div className="content">
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        {isProductInCart(product) ? (
          <CartQty product={product} />
        ) : (
          <Link to="" onClick={() => handleAddToCart(product)}>
            Add To Cart
          </Link>
        )}
      </div>
    </div>
  );
}

export default Product;
