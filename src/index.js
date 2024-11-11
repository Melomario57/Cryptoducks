const express = require("express");

const { PORT = 3000 } = process.env;

const app = express();
app.get("/", (req, res) => {
  res.status(404).send("Cannot find data");
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
