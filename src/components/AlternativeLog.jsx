import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Alternativelog = () => {
  const [sentToken, setSentToken] = useState(false);
  const [altEmail, setAltEmail] = useState();
  const [altPass, setAltPass] = useState();
  const [emailOrPhone, setEmailOrPhone] = useState();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const registeredUser = async () => {
      const res = await axios.get("/registeredUser/");
      setUserInfo(res.data);
    };
    return registeredUser();
  });

  const altLogin = async () => {
    const res = await axios.post("/altlogin/", {
      email: altEmail,
      password: altPass
    });
    const alt = res.data;
    return alt;
  };
  const mailTo = e => {
    e.preventDefault();
    if (Number.isInteger(emailOrPhone)) {
      const sendEmail = async () => {
        const res = await axios.get("/sendEmail/", { email: userInfo.email });
        const mail = res.data;
        setSentToken(true);
        return mail;
      };
      return sendEmail();
    } else {
      const sendSMS = async () => {
        const res = await axios.get("/sendSMS/", {
          phone_number: userInfo.phone_number
        });
        const text = res.data;
        return text;
      };
      return sendSMS();
    }
  };

  return (
    <>
      {sentToken ? (
        <form>
          <input value={emailOrPhone} onChange={e => setEmailOrPhone()} />
          <button
            onClick={e => {
              mailTo();
            }}
          ></button>
        </form>
      ) : (
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
      )}
    </>
  );
};
export default Alternativelog;
