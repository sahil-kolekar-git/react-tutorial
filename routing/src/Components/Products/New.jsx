import axios from "axios";
import React, { useEffect, useState } from "react";

const New = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((fetch) => setData(fetch.data.products));
  }, []);
  console.log(data);

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
              {data.map((val, index) => {
                let { id, title, description, thumbnail, image, price } = val;
                return (
                  <tr key={index + 1}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>
                      <img src={thumbnail || image} alt="" />
                    </td>
                    <td>{description}</td>
                    <td>₹{price}</td>
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
export default New;
