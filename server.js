require('dotenv').config();
const path = require("path");
const express = require("express");
const mysql = require('mysql2');

const app = express(); // create express app

// add middlewares

app.use(express.json());

// Agregamos el código de nuestro router (routes/index.js)
app.use('/v1', require('./routes'));
//Servimos nuestro app de react
app.use(express.static(path.join(__dirname, "public","build")));
app.use(express.static("public"));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "build","index.html"));
});

//Funcion que hace handle de errores en la conexion con la base de datos
function handleDisconnect() {
  const connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
  });

  connection.connect(function (err) {
      if (err) {
          console.log('error when connecting to db:', err);
          setTimeout(handleDisconnect, 2000);
      }
  });
  global.db = connection;
  connection.on('error', function (err) {
      console.log('db error', err);
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
          handleDisconnect();
      } else {
          throw err;
      }
  });
}

handleDisconnect();

app.listen(process.env.PORT || 8081, () => {
    console.log("App listening");
});