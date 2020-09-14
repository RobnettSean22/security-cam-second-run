require("dotenv").config();
const bcrypt = require("bcrypt");
const { EMAIL, PASSWORD, APIKEY, APISECRET } = process.env;
const nodemailer = require("nodemailer");
const Nexmo = require("nexmo");
const userData = require("../../data/user.json");
const Speakeasy = require("speakeasy");

let genSecret;
let token;
let xUser;
let index = 0;
const genToken = () => {
  const secret = Speakeasy.generateSecret().ascii;
  console.log(secret);
  genSecret = "robnettsean@gmail.com" + secret;

  token = Speakeasy.totp({
    secret: genSecret,

    algorithm: "sha512",
    digits: 6
  });
};
module.exports = {
  register: async (req, res) => {
    const { email, password, phone_number } = req.body;
    const foundUser = await userData.filter(inUse => {
      return inUse.email === email ? email : null;
    });

    if (foundUser.length) {
      res.status(400).send(`a login with this email already exists`);
    } else {
      const saltRounds = 12;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      userData.push({
        email,
        password: hashedPassword,
        phone_number
      });
      index++;
    }

    res.status(200).send(req.session.userData);
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    const [foundUser] = await userData.filter(inUse => {
      return inUse.email === email ? email : null;
    });
    if (!foundUser) {
      res.status(400).send("username does not match");
    } else {
      const authenticated = bcrypt.compareSync(password, foundUser.password);
      console.log(authenticated);
      if (authenticated) {
        xUser = foundUser.email;
        console.log(foundUser);
        res.status(200).send(req.session.foundUser);
      } else {
        res.status(400).send("password does not match");
      }
    }
  },

  verifyEmail: async (req, res) => {
    const { email } = req.body;
    const [foundUser] = await userData.filter(inUse => {
      return inUse.email === email ? email : null;
    });
    if (!foundUser) {
      res.status(400).send("user with this account does not exist");
    }
    res.status(200).send("email matches");
  },
  sendEmail: async (req, res) => {
    const { email } = req.body;
    genToken();
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: EMAIL,
        pass: PASSWORD
      }
    });

    await transporter.sendMail({
      from: "test@test.com",
      to: email,
      subject: "Temparay password",
      text: "Hello",
      html: `<body>
         
         <ul style='list-style: none; padding: 0px; font-size: 18px; color: #333, font-family: san-serif'>
             <li><h3>Hi, ${email}</h3></li>
             <li><h3>${token}</h3></li>
            
         </ul>
         <body>`
    });
    console.log(token);
    res.status(200).send("email was sent");
  },
  sendSMS: async (req, res) => {
    const { phone_number } = req.body;
    genToken();
    const nexmo = new Nexmo({
      apiKey: APIKEY,
      apiSecret: APISECRET
    });

    const from = "Vonage APIs";
    const to = phone_number;
    const text = token;

    nexmo.message.sendSms(from, to, text);
    console.log(token);
    res.status(200).send("text was sent");
  },

  alternateLogin: async (req, res) => {
    const { email, digitCode } = req.body;
    const [foundUser] = await userData.filter(inUse => {
      return inUse.email === email ? email : null;
    });
    if (!foundUser) {
      res.status(400).send("username does not match");
    } else {
      const authenticated = Speakeasy.totp.verify({
        secret: genSecret,

        token: digitCode,

        algorithm: "sha512",
        digits: 6
      });
      console.log(authenticated);
      if (authenticated) {
        res.status(200).send(req.session.foundUser);
      } else {
        res.status(400).send("password does not match");
      }
    }
  },
  killSession: async (req, res, next) => {
    req.session.destroy();
    let i = await userData.findIndex(x => x.email === xUser);
    console.log(i);
    res.status(200).send(userData.splice(i, 1));
  }
};
