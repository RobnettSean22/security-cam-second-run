require("dotenv").config();
const bcrypt = require("bcrypt");
const { EMAIL, PASSWORD, APIKEY, APISECRET } = process.env;
const nodemailer = require("nodemailer");
//Nexmo account has been canceeled so seending sms at this time will not fire
const Nexmo = require("nexmo");
const userData = require("../../data/user.json");
const devices = require("../../data/sample-devices.json");
const status = require("../../data/sample-status.json");
const Speakeasy = require("speakeasy");

let genSecret;
let token;
let xUser;
let index = 0;
let loggedUser;
// token creation
const genToken = () => {
  const secret = Speakeasy.generateSecret().ascii;
  //
  genSecret = "robnettsean@gmail.com" + secret;

  token = Speakeasy.totp({
    secret: genSecret,

    algorithm: "sha512",
    digits: 6,
  });
};
module.exports = {
  // retrieaves user data after verification is completed
  all: async (req, res) => {
    res.status(200).send(userData);
  },
  // registration of new user
  register: async (req, res) => {
    const { email, password, phone_number } = req.body;
    const foundUser = await userData.filter((inUse) => {
      return inUse.email === email ? email : null;
    });
    //checks if user is already in the system
    if (foundUser.length) {
      res.status(400).send(`a login with this email already exists`);
      // if user is not found then a new user will be created
    } else {
      const saltRounds = 12;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      userData.push({
        email,
        password: hashedPassword,
        phone_number,
      });
      index++;
    }

    res.status(200).send(req.session.userData);
  },

  login: async (req, res) => {
    // credentials are entered
    const { email, password } = req.body;
    const [foundUser] = await userData.filter((inUse) => {
      return inUse.email === email ? email : null;
    });

    if (!foundUser) {
      // credentials (username) are checked for verification.
      res.status(400).send("username does not match");
    } else {
      // (password) credentials are checked
      const authenticated = bcrypt.compareSync(password, foundUser.password);

      if (authenticated) {
        xUser = foundUser.email;

        res.status(200).send(foundUser);
      } else {
        res.status(400).send("password does not match");
      }
    }
  },

  //forgotten password email verification check
  verifyEmail: async (req, res) => {
    const { email } = req.body;
    const [foundUser] = await userData.filter((inUse) => {
      return inUse.email === email
        ? email
        : inUse.phone_number === email
        ? email
        : null;
    });
    loggedUser = foundUser;
    if (!foundUser) {
      res.status(400).send("user with this account does not exist");
    }
    res.status(200).send(true);
  },

  // logic for sending OTP by email
  sendEmail: async (req, res) => {
    const { email } = req.body;
    genToken();
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: EMAIL,
        pass: PASSWORD,
      },
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
         <body>`,
    });

    res.status(200).send("email was sent");
  },

  // logic for sending  OTP through sms
  sendSMS: async (req, res) => {
    const { phone_number } = req.body;
    genToken();
    const nexmo = new Nexmo({
      apiKey: APIKEY,
      apiSecret: APISECRET,
    });

    const from = "Vonage APIs";
    const to = phone_number;
    const text = token;

    nexmo.message.sendSms(from, to, text);

    res.status(200).send("text was sent");
  },

  // after email is verified for secondary login then logic for the OTP  end point is availible to run
  alternateLogin: async (req, res) => {
    const { email, digitCode } = req.body;

    const [foundUser] = await userData.filter((inUse) => {
      return inUse.email === email ? email : null;
    });
    if (!foundUser) {
      res.status(400).send("username does not match");
    } else {
      // token is created for comparisson with what the user entered if authenticated user is loggedin
      const authenticated = Speakeasy.totp.verify({
        secret: genSecret,
        window: 2,
        token: digitCode,

        algorithm: "sha512",
        digits: 6,
      });
      xUser = foundUser.email;

      if (authenticated) {
        res.status(200).send(req.session.foundUser);
      } else {
        // tokens do not match then error is fired
        res.status(400).send("password does not match");
      }
    }
  },
  reggisteredUser: async (req, res) => {
    res.status(200).send(loggedUser);
  },
  killSession: async (req, res, next) => {
    req.session.destroy();
    let i = await userData.findIndex((x) => x.email === xUser);

    xUser = null;
    res.status(200).send(userData.splice(i, 1));
  },
  // retrieve camera data
  getData: async (req, res) => {
    let renameProperty = await JSON.stringify(status.status).replace(
      /"deviceId":/g,
      '"id":'
    );
    const cameraStatus = await JSON.parse(renameProperty);
    const nameOfDevice = await devices.devices;
    // the camera data comes in to seperate "files" but rely on each other
    let mergeData = await [
      ...[cameraStatus, nameOfDevice]
        .reduce(
          (m, arr) => (
            // data is combined and made into a new object based off of their matching id's
            arr.forEach(
              (obj) =>
                (m.has(obj.id) && Object.assign(m.get(obj.id), obj)) ||
                m.set(obj.id, obj)
            ),
            m
          ),
          new Map()
        )
        .values(),
    ];
    if (xUser.length) {
      // if the user is logged in then data will display in the display area
      res.status(200).send(mergeData);
    } else {
      // if url is accessed but the user has not been authenticated then data will not display
      res.status(400).send("not logged in");
    }
  },
};
