import React from "react";
import logo from "../assets/Logo.svg";
import styled from "styled-components";

const Head = styled.header`
  width: 100%;
  height: 7%;
  background-image: linear-gradient(to right, #a2dda7, #3fcaab);
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
          style={{ width: "20%", height: "35%" }}
        />
      </Head>
    </>
  );
}
export default Header;
