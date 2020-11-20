import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

export default () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data.products);
        setLoaded(true);
      })
      .catch((err) => console.log("Error:", err));
  }, []);

  return (
    <div>
      <ProductForm />
      <hr/>
      <h2>All of the Products are Below</h2>
      {loaded && <ProductList products={products}/>}
    </div>
  );
};


