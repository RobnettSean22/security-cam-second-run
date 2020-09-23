import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import styled from "styled-components";

const LoggingIn = styled.form`
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
    height: 35px;
    border-color: #f2f5f2;
    color: #888888;
    font-family: "Open Sans", sans-serif;
    font-style: italic;
    &:focus {
      outline: none;
    }
  }
  button {
    width: 152px;
    height: 39px;
  }
  h5 {
    margin: 0;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const Login = props => {
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

  return (
    <>
      <Header />

      <LoggingIn>
        <input
          placeholder='Email'
          type='email'
          value={logEmail}
          onChange={e => setLogEmail(e.target.value)}
        />
        <input
          placeholder='Password'
          value={logPass}
          onChange={e => setLogPass(e.target.value)}
        />

        <button
          onClick={e => {
            login();
          }}
        >
          Log In
        </button>
        <h5 onClick={e => props.history.push("/send-code/")}>
          Forgot Password?
        </h5>
      </LoggingIn>
    </>
  );
};
export default Login;
