import React from "react";
import logo from "../../assets/logo2.jpg";
import { useDispatch, useSelector } from "react-redux";
import { TbNumber } from "react-icons/tb";

function Navbar() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.value);
  if (users.length == 0) {
    alert("card qolmadi");
  }
  return (
    <div className="navbar">
      <img src={logo} alt="" />

      <button> №{users.length} </button>
    </div>
  );
}

export default Navbar;
