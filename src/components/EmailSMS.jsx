import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
function EmailSMS(props) {
  const [emailOrPhone, setEmailOrPhone] = useState();
  console.log(emailOrPhone);
  const verified = () => {
    const verifyEmail = async e => {
      const res = axios.post("/verifyEmail/", { email: emailOrPhone });
      const verify = res.data;

      return verify;
    };
    if (verifyEmail()) {
      const mailTo = e => {
        const checkLetNum = parseInt(emailOrPhone);
        if (Number.isInteger(checkLetNum)) {
          const sendSMS = async () => {
            const res = await axios.post("/sendSMS/", {
              phone_number: checkLetNum
            });
            const text = res.data;
            return text;
          };
          return sendSMS();
        } else {
          const sendEmail = async () => {
            const res = await axios.post("/sendEmail/", {
              email: emailOrPhone
            });
            const mail = res.data;

            return mail;
          };
          return sendEmail();
        }
      };
      props.history.push("/secondarylogin/");
      return mailTo();
    } else {
      alert("an account with this email does not exist ");
    }
  };
  return (
    <>
      <Header />
      <input
        placeholder='Email or Phone'
        type='email'
        value={emailOrPhone}
        onChange={e => setEmailOrPhone(e.target.value)}
      />

      <button
        onClick={e => {
          verified();
        }}
      ></button>
    </>
  );
}
export default EmailSMS;
