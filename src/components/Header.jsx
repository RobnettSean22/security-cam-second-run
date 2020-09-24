import React from "react";
import logo from "../assets/Logo.svg";
import styled from "styled-components";

const Head = styled.header`
  width: 100%;
  height: 6.6%;
  background-image: linear-gradient(to bottom, #a2dda7, #3fcaab);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Header() {
  return (
    <>
      {" "}
      <Head>
        <img
          placeholder='Search by Name or I...'
          src={logo}
          alt=''
          style={{ width: "58px", height: "50px" }}
        />
      </Head>
    </>
  );
}
export default Header;
