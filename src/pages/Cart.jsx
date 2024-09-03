import { useContext } from "react";
import { ecomContext } from "../Home";
import CartQty from "../component/CartQty";
import { Link } from "react-router-dom";
import { MdCurrencyRupee } from "react-icons/md";

function Cart() {
  const { cart } = useContext(ecomContext);
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
                    <CartQty product={item} />
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
                <span></span>
              </li>
              <li>
                <span>Delivery: </span>
                <span></span>
              </li>
            </ul>
            <hr />
            <h3>
              <span></span>
              <span></span>
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
