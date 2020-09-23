import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import axios from "axios";

const Regestration = styled.form`
  width: 400px;
  height: 279px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid black;
  border-radius: 2px;
  input {
    width: 387px;
    height: 26px;
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
          placeholder='email'
          type='email'
          value={regEmail}
          onChange={e => setRegEmail(e.target.value)}
        />
        <input
          placeholder='password'
          value={regPass}
          onChange={e => setRegPass(e.target.value)}
        />
        <input
          placeholder='phone_number'
          value={regPhone}
          onChange={e => setRegPhone(e.target.value)}
        />
        <button></button>
      </Regestration>
    </>
  );
};
export default Authorization;
