import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="products">
        {products
          ? products.map((product) => {
              return (
                <div key={product.id} className="product">
                  <div className="product-photo">
                    <img src={product.image} alt="Product Image" />
                  </div>
                  <div className="content">
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                    <a href="">Add To Cart</a>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
}

export default App;
