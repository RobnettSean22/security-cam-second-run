const bcrypt = require("bcrypt");
const userData = require("../../src/data/user.json");
let index = 0;
module.exports = {
  register: async (req, res) => {
    const { username, password, phone_number } = req.body;
    const foundUser = await userData.filter(inUse => {
      return inUse.username.match(username) ? username : null;
    });

    if (foundUser.length) {
      res.status(400).send(`the username ${username} is already in use`);
    } else {
      const saltRounds = 12;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      userData.push({
        username,
        hashedPassword,
        phone_number
      });
      index++;
    }

    res.status(200).send(userData);
  }
};
