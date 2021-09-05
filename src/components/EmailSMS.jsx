import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import styled from "styled-components";

const SendTo = styled.form`
  width: 400px;
  height: 189px;
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
    width: 155px;
    height: 39px;
    border-color: #888888;
    background: linear-gradient(to right, #a2dda7, #3fcaab);
    font-family: "Open Sans", sans-serif;
    font-size: 17px;
    font-weight: bold;
    letter-spacing: 3px;
  }
`;
// Sending OTP (one time password)
const EmailSMS = (props) =>{
  const [emailOrPhone, setEmailOrPhone] = useState();
  console.log(emailOrPhone);
  const verified = () => {
    const verifyEmail = async e => {
      const res = axios.post("/verifyEmail/", { email: emailOrPhone });
      const verify = res.data;

      return verify;
    };
    //verify if the email entered is registered as a user
    if (verifyEmail()) {
      const mailTo = e => {
        //change entry into a string 
        const checkLetNum = parseInt(emailOrPhone);
         // option to send OTP to the phone number associated with the user email on record
       
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
          //option for the OTP to be sent to phone number on record with user email
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
      <SendTo>
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
        >
          Send Code
        </button>
      </SendTo>
    </>
  );
}
export default EmailSMS;
