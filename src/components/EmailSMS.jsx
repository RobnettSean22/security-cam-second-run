import React, { useState } from "react";
import axios from "axios";
function EmailSMS(props) {
  const [emailOrPhone, setEmailOrPhone] = useState();

  const verified = () => {
    const verifyEmail = async e => {
      const res = axios.post("/verifyEmail/", { email: setEmailOrPhone });
      const verify = res.data;
      props.history.push("/secondarylogin/");
      return verify;
    };
    if (verifyEmail()) {
      const mailTo = e => {
        if (Number.isInteger(emailOrPhone)) {
          const sendEmail = async () => {
            const res = await axios.get("/sendEmail/", { email: emailOrPhone });
            const mail = res.data;

            return mail;
          };
          return sendEmail();
        } else {
          const sendSMS = async () => {
            const res = await axios.get("/sendSMS/", {
              phone_number: emailOrPhone.phone_number
            });
            const text = res.data;
            return text;
          };
          return sendSMS();
        }
      };
      return mailTo();
    } else {
      alert("an account with this email does not exist ");
    }
  };
  return (
    <>
      <form>
        <input
          placeholder='email'
          type='email'
          value={emailOrPhone}
          onChange={e => setEmailOrPhone(e.target.value)}
        />

        <button onClick={e => {}}></button>
      </form>
    </>
  );
}
export default EmailSMS;
