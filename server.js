const path = require("path");
const express = require("express");
const app = express(); // create express app

// add middlewares
app.use(express.static(path.join(__dirname, "public","build")));
app.use(express.static("public"));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "build","index.html"));
});

app.listen(process.env.PORT || 8080, () => {
    console.log("App listening");
});