import React, { useEffect, useState } from "react";
import axios from "axios";

export default (props) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${props._id}`)
      .then((res) => setProduct(res.data.product))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <div className="card mt-3">
        <h4 className="card-header">{product.title}</h4>
        <div className="card-body">
          <h6 className="card-subtitle">{product.price}</h6>
          <p className="card-text text-center">{product.description}</p>
        </div>
      </div>
    </div>
  );
};
