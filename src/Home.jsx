import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Header from "./component/Header.jsx";

function Home() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
