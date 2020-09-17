import React, { useState } from "react";
import styled from "styled-components";
import Login from "./Login";
import axios from "axios";
const Authorization = () => {
  const [logged, setLogged] = useState(true);
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
    setLogged(false);
    e.preventDefault();
    const reg = res.data;

    return reg;
  };

  return (
    <>
      {logged ? (
        <form
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
        </form>
      ) : (
        <Login
          regEmail={regEmail}
          setRegEmail={setRegEmail}
          regPass={regPass}
          setRegPass={setRegPass}
        />
      )}
    </>
  );
};
export default Authorization;
