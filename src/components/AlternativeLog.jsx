import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Alternativelog = () => {
  const [altPass, setAltPass] = useState();

  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const registeredUser = async () => {
      const res = await axios.get("/registeredUser/");
      const data = res.data;
      return data;
    };
    return setUserInfo(registeredUser);
  });

  const altLogin = async () => {
    const res = await axios.post("/altlogin/", {
      email: userInfo.email,
      password: altPass
    });
    const alt = res.data;
    return alt;
  };

  return (
    <>
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
