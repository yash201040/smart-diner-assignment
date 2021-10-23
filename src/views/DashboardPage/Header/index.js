import React from "react";
import "./header.css";

function Header() {
  const logOut = () => {
    // to-do - react routing...
  };

  return (
    <div className="heading">
      <h1 className="title">DASHBOARD FOR ORDERS</h1>
      <input type="button" className="logout button" value="Log Out" onClick={logOut} />
    </div>
  );
}

export default Header;
