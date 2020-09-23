import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import styled from "styled-components";

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
      <form
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
      </form>
    </>
  );
};
export default Alternativelog;
