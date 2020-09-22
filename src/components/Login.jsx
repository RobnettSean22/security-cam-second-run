import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

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
      <div>
        <form>
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
        <button onClick={e => props.history.push("/send-code/")}>
          forgot password
        </button>
        <button
          onClick={e => {
            login();
          }}
        ></button>
      </div>
    </>
  );
};
export default Login;
