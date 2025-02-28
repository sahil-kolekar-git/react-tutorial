import React, { useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const User = () => {
  let inputRef = useRef();
  let toUserDetails = useNavigate();
  let handleClick = () => {
    toUserDetails(inputRef.current.value);
  };
  return (
    <div className="user">
      <input type="number" name="userId" id="userId" ref={inputRef} />
      <button onClick={handleClick}>Search User</button>
      <Outlet />
    </div>
  );
};

export default User;
