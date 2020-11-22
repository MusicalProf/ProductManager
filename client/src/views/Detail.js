import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

export default (props) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${props._id}`)
      .then((res) => setProduct(res.data.product))
      .catch((err) => console.log(err));
  }, []);

  const editProduct = (productId) => {
    axios.get("http://localhost:8000/api/products/" + productId).then(() => {
      navigate(`/products/${productId}/edit`);
    });
  };

  const deleteProduct = (productId) => {
    axios
      .delete("http://localhost:8000/api/products/" + productId)
      .then((res) => {
        console.log('Product Deleted', res.data.product)
        navigate("/");
      });      
  };

  if (product == null){
    return 'Searching for the products. Please wait...'
  }

  return (
    <div className="container d-flex flex-column justify-content-center col-sm-6">
      <Link to="/">Home</Link>
      <div className="card mt-3">
        <h4 className="card-header">{product.title}</h4>
        <div className="card-body">
          <h6 className="card-subtitle">${product.price}</h6>
          <p className="card-text text-center">{product.description}</p>
          <button
            className="btn btn-info mr-2"
            onClick={() => editProduct(product._id)}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deleteProduct(product._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
