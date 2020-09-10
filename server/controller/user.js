const bcrypt = require("bcrypt");
const userData = require("../../src/data/user.json");
let index = 0;
module.exports = {
  register: async (req, res) => {
    const { username, password, phone_number } = req.body;
    const foundUser = await userData;

    if (foundUser.length) {
      const saltRounds = 12;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      userData.push({
        username,
        hashedPassword,
        phone_number
      });
      index++;
    } else {
      res.status(400).send("user exist");
    }

    res.status(200).send(userData);
  }
};
