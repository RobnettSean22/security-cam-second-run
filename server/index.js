const express = require("express");
const app = express();
const session = require("express-session");
const {
  register,
  login,
  alternateLogin,
  verifyEmail,
  sendEmail,
  sendSMS,
  killSession,
  getData,
  all
} = require("./controller/user");

const port = 5000;

app.use(express.json());
app.use(
  session({ secret: "dfsdfsfonsl", resave: false, saveUninitialized: false })
);
app.get("/all/", all);
app.get("/getData/", getData);
app.post("/reg/", register);
app.get("/login/", login);
app.get("/verifyEmail/", verifyEmail);
app.get("/altlogin/", alternateLogin);
app.post("/sendEmail/", sendEmail);
app.post("/sendSMS/", sendSMS);
app.delete("/killSession/", killSession);

app.listen(port, () => {
  console.log(`loud and clear on ${port}`);
});
