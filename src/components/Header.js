import React, { useState } from "react";
import { LOGO_URI } from "../utils/constants";
import useOnlineOfflineStatus from "../utils/useOnlineOfflineStatus";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [buttonName, setButtonName] = useState(true);
  const handleChangeButtonText = () => {
    setButtonName(!buttonName);
  };
  const cartItems = useSelector(state => state.cart.cart);
  const {isOnline} = useOnlineOfflineStatus();
  return (
    <div className="flex justify-around items-center shadow-md">
      <div>
        <img className="w-20 h-20" src={LOGO_URI} alt="Logo" />
      </div>
      <div>
        <ul className="flex items-center">
          <li className="mr-5">{isOnline ? "🟢" : "🔴"}</li>
          <li className="mr-5 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-5 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="mr-5 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mr-5 cursor-pointer">
            <Link to="/cart">Cart - {cartItems.length}</Link>
          </li>
          <li className="mr-5 cursor-pointer">
            <button
              onClick={() => handleChangeButtonText()}
              className="bg-sky-500 text-white w-32 p-1 rounded "
            >
              {buttonName ? "Login" : "Logout"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
