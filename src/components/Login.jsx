import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Login = ({ regEmail, regPass, setRegEmail, setRegPass }) => {
  const [forgotPW, setForgotPW] = useState(false);
  const loginIn = async e => {
    const res = await axios.get("/login/", {
      email: regEmail,
      password: regPass
    });
    const log = await res.data;
    return log;
  };

  const verifyEmail = async e => {
    const res = axios.get("/verifyEmail/", { email: regEmail });
    const verify = res.data;

    return verify;
  };

  return (
    <>
      {forgotPW ? (
        <form
          onSubmit={e => {
            verifyEmail();
          }}
        >
          <input
            placeholder='email'
            type='email'
            value={regEmail}
            onChange={e => setRegEmail(e.target.value)}
          />

          <button></button>
        </form>
      ) : (
        <div>
          <form
            onSubmit={e => {
              loginIn();
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

            <button></button>
          </form>
          <button onClick={e => setForgotPW(true)}>forgot password</button>
        </div>
      )}
    </>
  );
};
export default Login;
