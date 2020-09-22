import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Login = props => {
  const [forgotPW, setForgotPW] = useState(false);
  const [logEmail, setLogEmail] = useState("");
  const [logPass, setLogPass] = useState("");

  const login = async e => {
    const res = await axios.post("/login/", {
      email: logEmail,
      password: logPass
    });
    const log = await res.data;
    props.history.push("/security-cameras/");
    return log;
  };

  const verifyEmail = async e => {
    const res = axios.post("/verifyEmail/", { email: logEmail });
    const verify = res.data;
    props.history.push("/secondarylogin/");
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
            value={logEmail}
            onChange={e => setLogEmail(e.target.value)}
          />

          <button></button>
        </form>
      ) : (
        <div>
          <form
            onSubmit={e => {
              login();
            }}
          >
            <input
              placeholder='email'
              type='email'
              value={logEmail}
              onChange={e => setLogEmail(e.target.value)}
            />
            <input
              placeholder='password'
              value={logPass}
              onChange={e => setLogPass(e.target.value)}
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
