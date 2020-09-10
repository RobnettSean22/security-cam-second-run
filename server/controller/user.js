const bcrypt = require("bcrypt");
const userData = require("../../src/data/user.json");
let index = 0;
module.exports = {
  register: async (req, res) => {
    const { username, password, phone_number } = req.body;
    const foundUser = await userData.filter(inUse => {
      return inUse.username === username ? username : null;
    });

    if (foundUser.length) {
      res.status(400).send(`the username ${username} is already in use`);
    } else {
      const saltRounds = 12;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      userData.push({
        username,
        password: hashedPassword,
        phone_number
      });
      index++;
    }

    res.status(200).send(userData);
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    const [foundUser] = await userData.filter(inUse => {
      return inUse.username === username ? username : null;
    });
    if (!foundUser) {
      res.status(400).send("username does not match");
    } else {
      const authenticated = bcrypt.compare(password, foundUser.password);

      if (authenticated) {
        res.status(200).send(foundUser);
      } else {
        res.status(400).send("password does not match");
      }
    }
  }
};
