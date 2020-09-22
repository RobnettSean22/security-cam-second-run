import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
const Authorization = props => {
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

    const reg = await res.data;
    setRegEmail("");
    setRegPass("");
    props.history.push("/login/");
    return reg;
  };

  return (
    <>
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
    </>
  );
};
export default Authorization;
