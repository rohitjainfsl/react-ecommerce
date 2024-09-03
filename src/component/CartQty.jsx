import { useContext } from "react";
import { ecomContext } from "../Home";
import { MdRemoveShoppingCart } from "react-icons/md";

/* eslint-disable react/prop-types */
function CartQty({ productID }) {
  const { increment, decrement, getProductQuantity, handleRemoveFromCart } =
    useContext(ecomContext);
  return (
    <div className="miniCart">
      <div className="cartQty">
        <button onClick={() => increment(productID)}>+</button>
        <p>{getProductQuantity(productID)}</p>
        <button onClick={() => decrement(productID)}>-</button>
      </div>
      <MdRemoveShoppingCart onClick={() => handleRemoveFromCart(productID)} />
    </div>
  );
}

export default CartQty;
