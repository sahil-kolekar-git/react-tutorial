import axios from "axios";
import React, { useEffect, useState } from "react";

const Featured = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((fetch) => setData(fetch.data));
  }, []);
  return (
    <>
      <div className="new">
        <article>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Image</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {data.map((value, index) => {
                let { id, title, image, price, description } = value;
                return (
                  <tr key={index + 1}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>
                      <img src={image} alt="" />
                    </td>
                    <td>{description}</td>
                    <td>${price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </article>
      </div>
    </>
  );
};
export default Featured;
