import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

export default (props) => {
  const [form, setForm] = useState({
    title: "",
    price: 0,
    description: "",
  });

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    // e.preventDefault();
    axios
      .post("http://localhost:8000/api/products/new", form)
      .then((res) => console.log("Response:", res))
      .then((res) => navigate("/"))
      .catch((err) => console.log("Error", err));
  };

  return (
    <div className="container">
      <h1 className="display-5">Product Manager</h1>
      <div className="row d-flex justify-content-center">
        <form onSubmit={onSubmitHandler} className="form-group col-sm-6">
          <label>Title: </label>
          <input
            type="text"
            name="title"
            onChange={onChangeHandler}
            className="form-control"
          ></input>
          <label>Price: </label>
          <input
            type="text"
            name="price"
            placeholder="$"
            onChange={onChangeHandler}
            className="form-control"
          ></input>
          <label>Description: </label>
          <input
            type="text"
            name="description"
            onChange={onChangeHandler}
            className="form-control"
          ></input>{" "}
          <br />
          <input type="submit" className="btn btn-success" value="Create" />
        </form>
      </div>
    </div>
  );
};
