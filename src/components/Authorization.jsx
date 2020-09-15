import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
const Authorization = () => {
  const [regEmail, setRegEmail] = useState("");
  const [regPass, setRegPass] = useState("");
  const [regPhone, setRegPhone] = useState();

  const register = async (email, password, phone_number) => {
    const res = await axios.post("/reg/", {
      email,
      password,
      phone_number
    });

    const reg = res.data;

    return reg;
  };
  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          register(regEmail, regPass, regPhone);
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
          type='password'
          value={regPass}
          onChange={e => setRegPass(e.target.value)}
        />
        <input
          placeholder='phone_number'
          value={regPhone}
          onChange={e => setRegPhone(e.target.value)}
        />
        <button></button>
      </form>
    </>
  );
};
export default Authorization;
