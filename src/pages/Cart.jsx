import { useContext, useEffect, useState } from "react";
import { ecomContext } from "../Home";
import { Link } from "react-router-dom";
import { MdCurrencyRupee } from "react-icons/md";
import CartQty from "../component/CartQty";

function Cart() {
  const [cartTotal, setCartTotal] = useState(0);
  const [deliveryFees, setDeliveryFees] = useState(0);

  const { cart } = useContext(ecomContext);

  useEffect(() => {
    if (cart.length > 0) {
      let total = 0;
      cart.forEach((cartItem) => (total += cartItem.price * cartItem.quantity));
      setCartTotal(total.toFixed(2));
    }
  }, [cart]);
  return (
    <>
      <h2>Your Shopping Cart</h2>
      {cart.length > 0 ? (
        <div className="cart">
          <div className="contents">
            {cart.map((item) => {
              return (
                <div className="cartItem" key={item.id}>
                  <div className="left">
                    <img src={item.image} alt="Cart Item Image" />
                  </div>
                  <div className="right">
                    <h4>{item.title}</h4>
                    <p>
                      Price: <MdCurrencyRupee />
                      {item.price}
                    </p>
                    <CartQty productID={item.id} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="total">
            <h3>Order Summary</h3>
            <ul>
              <li>
                <span>Items: </span>
                <span>{cartTotal}</span>
              </li>
              <li>
                <span>Delivery: </span>
                <span>{deliveryFees}</span>
              </li>
            </ul>
            <hr />
            <h3>
              <span>Your Total:</span>
              <span>{(Number(cartTotal) + Number(deliveryFees)).toFixed(2)}</span>
            </h3>
          </div>
        </div>
      ) : (
        <h2>
          Your cart is empty. <Link to="/"> GO Shopping</Link>
        </h2>
      )}
    </>
  );
}

export default Cart;
