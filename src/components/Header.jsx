import React from "react";
import logo from "../assets/Logo.svg";

function Header() {
  return (
    <>
      {" "}
      <header>
        <img
          placeholder='Search by Name or I...'
          src={logo}
          alt=''
          style={{ width: "20%", height: "35%" }}
        />
      </header>
    </>
  );
}
export default Header;
