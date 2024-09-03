import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";
import Products from "./component/Products";

function App() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return <h3>Loading Data...</h3>;

  return (
    <>
      <div className="products">
        {products ? <Products products={products} /> : ""}
      </div>
    </>
  );
}

export default App;
