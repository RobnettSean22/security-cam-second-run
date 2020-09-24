import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import styled from "styled-components";

const Alternative = styled.form`
  width: 400px;
  height: 279px;
  margin: 0 auto;
  background: #f2f5f2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #3fcaab;
  border-radius: 2px;
  box-shadow: 4px 6px 6px -4px rgba(63, 202, 171, 1);
  input {
    width: 338px;
    height: 26px;
    border-color: #f2f5f2;
    color: #888888;
    font-family: "Open Sans", sans-serif;
    font-style: italic;
    &:focus {
      outline: none;
    }
  }
`;

const Alternativelog = props => {
  const [altPass, setAltPass] = useState();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    registeredUser();
  }, []);
  const registeredUser = async () => {
    const res = await axios.get("/registeredUser/");
    const data = res.data;
    setUserInfo(data);
  };
  const altLogin = async () => {
    const res = await axios.post("/altlogin/", {
      email: userInfo.email,
      digitCode: altPass
    });
    console.log(userInfo);
    const alt = res.data;
    props.history.push("/security-cameras/");
    return alt;
  };

  return (
    <>
      <Header />
      <Alternative
        onSubmit={e => {
          altLogin();
        }}
      >
        <input
          placeholder='password'
          value={altPass}
          onChange={e => setAltPass(e.target.value)}
        />

        <button></button>
      </Alternative>
    </>
  );
};
export default Alternativelog;
