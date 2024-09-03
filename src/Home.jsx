import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Header from "./component/Header.jsx";
import { createContext, useState } from "react";

export const ecomContext = createContext(null);

function Home() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(productToAdd) {
    const productAddingToCart = { ...productToAdd, quantity: 1 };
    setCart([...cart, productAddingToCart]);
  }

  function isProductInCart(product) {
    const productFound = cart.find((cartItem) => {
      return cartItem.id === product.id;
    });
    return productFound;
  }

  function handleRemoveFromCart(productID) {
    setCart(
      cart.filter((cartItem) => {
        return cartItem.id !== productID;
      })
    );
  }

  function increment(productID) {
    setCart(
      cart.map((cartItem) =>
        cartItem.id === productID
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  }

  function decrement(productID) {
    setCart(
      cart.map((cartItem) =>
        cartItem.id === productID
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  }

  function getProductQuantity(productID) {
    return cart.find((cartItem) => cartItem.id === productID).quantity;
  }

  return (
    <BrowserRouter>
      <ecomContext.Provider
        value={{
          cart,
          setCart,
          handleAddToCart,
          isProductInCart,
          handleRemoveFromCart,
          increment,
          decrement,
          getProductQuantity,
        }}
      >
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </main>
      </ecomContext.Provider>
    </BrowserRouter>
  );
}

export default Home;
