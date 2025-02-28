import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let toOrderSmry = useNavigate();
  return (
    <div>
      <h2>Home</h2>
      <button onClick={(e) => toOrderSmry("order-summary")}>Place Order</button>
    </div>
  );
};

export default Home;
