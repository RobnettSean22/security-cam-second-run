const bcrypt = require("bcrypt");
const userData = require("../../src/data/user.json");
const Speakeasy = require("speakeasy");
const Base64 = require("crypto-js/enc-base64");
const Utf8 = require("crypto-js/enc-utf8");

let index = 0;
module.exports = {
  register: async (req, res) => {
    const { email, password, phone_number, alternativePW } = req.body;
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
        phone_number,
        alternativePW
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
  sendTOTP: (req, res) => {},
  alternateLogin: async (req, res) => {
    const { email, alternativePW } = req.body;
    const [foundUser] = await userData.filter(inUse => {
      return inUse.email === email ? email : null;
    });
    if (!foundUser) {
      res.status(400).send("username does not match");
    } else {
      const asc = "HENNGECHALLENGE003";
      const sharedSecret = userData.email + asc;

      const authenticated = Speakeasy.totp.verify({
        secret: sharedSecret,

        token: alternativePW,

        algorithm: "sha512",
        digits: 10
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
