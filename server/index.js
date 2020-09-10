const express = require("express");
const app = express();
const { register } = require("./controller/user");

const port = 5000;

app.use(express.json());

app.post("/reg/", register);

app.listen(port, () => {
  console.log(`loud and clear on ${port}`);
});
