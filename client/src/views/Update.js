import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

export default (props) => {
  const { _id } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/api/products/" + _id).then((res) => {
      //   console.log(res.data);
      setTitle(res.data.product.title);
      setPrice(res.data.product.price);
      setDescription(res.data.product.description);
    });
  }, []);

  const updateProduct = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/products/" + _id, {
        title,
        price,
        description,
      })
      .then((res) => console.log(res))
      .then(() => navigate("/"));
  };

  return (
    <div className="container col-sm-6">
      <Link to="/">Home</Link>
      <h1>Update Product</h1>
      <h4>{title}</h4>
      <hr />
      <form className="form-group" onSubmit={updateProduct}>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="form-control"
        />
        <label>Price: </label>
        <input
          type="text"
          name="price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          className="form-control"
        />
        <label>Description: </label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="form-control"
        />
        <br />
        <input type="submit" className="btn btn-success" value="Update" />
      </form>
    </div>
  );
};
