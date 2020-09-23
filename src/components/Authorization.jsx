import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import axios from "axios";

const Regestration = styled.form`
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
  button {
    width: 90px;
    height: 28px;
  }
`;

const Authorization = props => {
  const [regEmail, setRegEmail] = useState();
  const [regPass, setRegPass] = useState();
  const [regPhone, setRegPhone] = useState();
  console.log(regEmail);
  const register = async e => {
    const res = await axios.post("/reg/", {
      email: regEmail,
      password: regPass,
      phone_number: regPhone
    });

    const reg = await res.data;
    setRegEmail("");
    setRegPass("");
    props.history.push("/login/");
    return reg;
  };

  return (
    <>
      <Header />
      <Regestration
        onSubmit={e => {
          register();
        }}
      >
        <input
          placeholder='Enter Email'
          type='email'
          value={regEmail}
          onChange={e => setRegEmail(e.target.value)}
        />
        <input
          placeholder='Enter Password'
          value={regPass}
          onChange={e => setRegPass(e.target.value)}
        />
        <input
          placeholder='Enter Phone Number'
          value={regPhone}
          onChange={e => setRegPhone(e.target.value)}
        />
        <button></button>
      </Regestration>
    </>
  );
};
export default Authorization;
