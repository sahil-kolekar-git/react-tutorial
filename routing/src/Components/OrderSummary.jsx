import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  let navigateBack = useNavigate();
  return (
    <div>
      <h2>Order Placed</h2>
      <button type="button" onClick={(e) => navigateBack(-1)}>
        back
      </button>
    </div>
  );
};

export default OrderSummary;
