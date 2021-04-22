const express = require("express");
const bodyPrser = require("body-parser");
// import express from 'express'
const response = require("./network/response");

const router = express.Router();

const port = 3000;
const app = express();

// leer el body de la peticion
app.use(bodyPrser.json());
app.use(bodyPrser.urlencoded({ extended: false }));
app.use(router);

router.get("/message", (_req, res) => {
  //lectura de las cabeceras
  console.log(_req.headers);
  res.header({
    "custom-header": "Header personalizado",
  });
  response.success(_req, res, "lista de mensajes", 200);
});

router.post("/message", (_req, res) => {
  console.log(_req.query);

  if (_req.query.error == "ok") {
    response.error(_req, res, "error simulado");
  } else {
    response.success(_req, res, "creado exitosamente");
  }
});

router.delete("/message", (_req, res) => {});

app.listen(port, () => {
  console.log(`Server listening port: ${port}`);
});
