import { Link} from "@reach/router";
import React from "react";

export default (props) => {
  return (
    <div>
      <table className="table table-striped table-bordered">
        <thead class="thead-dark">
          <tr>
            <th>Product Name:</th>
            <th>Product Price:</th>
            <th>Product Description:</th>
          </tr>
        </thead>
        {props.products.map((product) => {
          return (
            <tbody key={product._id}>
              <tr>
                <td>
                  <Link to={"/api/products/" + product._id}>
                  {product.title}</Link>
                </td>
                <td>${product.price}</td>
                <td className='text-center'>{product.description}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
