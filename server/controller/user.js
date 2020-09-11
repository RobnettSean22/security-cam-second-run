const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const userData = require("../../src/data/user.json");
const Speakeasy = require("speakeasy");

let genSecret;
let index = 0;
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

    res.status(200).send(userData);
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
        res.status(200).send(foundUser);
      } else {
        res.status(400).send("password does not match");
      }
    }
  },

  createToken: async (req, res) => {
    const { email } = req.body;
    const [foundUser] = await userData.filter(inUse => {
      return inUse.email === email ? email : null;
    });
    if (!foundUser) {
      res.status(400).send("user with this account does not exist");
    }
    const secret = Speakeasy.generateSecret().ascii;
    console.log(secret);
    const sharedSecret = "robnettsean@gmail.com" + secret;

    const token = Speakeasy.totp({
      secret: sharedSecret,

      algorithm: "sha512",
      digits: 6
    });

    genSecret = sharedSecret;
    console.log(token);
    res.status(200).send(foundUser);
  },

  alternateLogin: async (req, res) => {
    const { email, digitCode } = req.body;
    const [foundUser] = await userData.filter(inUse => {
      return inUse.email === email ? email : null;
    });
    if (!foundUser) {
      res.status(400).send("username does not match");
    } else {
      const secret = Speakeasy.generateSecret().ascii;
      console.log(secret);
      console.log(digitCode);
      console.log(genSecret);
      const authenticated = Speakeasy.totp.verify({
        secret: genSecret,

        token: digitCode,

        algorithm: "sha512",
        digits: 6
      });
      console.log(authenticated);
      if (authenticated) {
        res.status(200).send(foundUser);
      } else {
        res.status(400).send("password does not match");
      }
    }
  }
};
