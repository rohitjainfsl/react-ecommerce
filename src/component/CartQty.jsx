/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import { ecomContext } from "../Home";

function CartQty({ product }) {
  const { handleRemoveFromCart, cart } = useContext(ecomContext);

  function getProductQuantity(product) {
    const productFound = cart.find((cartItem) => {
      return cartItem.id === product.id;
    });
    return productFound.quantity;
  }

  return (
    <div className="miniCart">
      <div className="cartQty">
        <button>+</button>
        <p>{getProductQuantity(product)}</p>
        <button>-</button>
      </div>
      <MdRemoveShoppingCart onClick={() => handleRemoveFromCart(product)} />
    </div>
  );
}

export default CartQty;
