import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Userdetails = () => {
  let { userId } = useParams();

  let [data, setData] = useState({
    id: "",
    firstName: "",
    email: "",
    phone: "",
  });
  useEffect(() => {
    axios.get(`https://dummyjson.com/users/${userId}`).then((fetch) => {
      setData(fetch.data);
      console.log(fetch.data);
    });
  });
  return (
    <div className="new">
      <article>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.id}</td>
              <td>{data.firstName}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
            </tr>
          </tbody>
        </table>
      </article>
    </div>
  );
};

export default Userdetails;
