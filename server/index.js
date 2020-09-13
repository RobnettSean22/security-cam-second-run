const express = require("express");
const app = express();
const {
  register,
  login,
  alternateLogin,
  verifyEmail,
  sendEmail,
  sendSMS
} = require("./controller/user");

const port = 5000;

app.use(express.json());

app.post("/reg/", register);
app.post("/login/", login);
app.post("/verifyEmail/", verifyEmail);
app.post("/altlogin/", alternateLogin);
app.post("/sendEmail/", sendEmail);
app.post("/sendSMS/", sendSMS);

app.listen(port, () => {
  console.log(`loud and clear on ${port}`);
});
