const express = require("express");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
  console.log(`Server is not listening on PORT: ${PORT}`);
});
