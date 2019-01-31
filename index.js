const express = require("express");
const cron = require("node-cron");

app = express();

// cada um minuto e 30 segundos executa
/*
 * Uma vez a cada 5 minutos = (* /5 * * * *)
 * Duas vezes por hora = (* 0,30 * * * *)
 * Uma vez por hora = (* 0 * * * *)
 * Duas vezes por dia = (* 0 0,12 * *)
 * Uma vez por dia = (* 0 0 * * *)
 * Uma vez por semana = (* 0 0 * * 0)
 * Uma vez por mês = (* 0 0 1 * *)
 */

verifyNumber = () => {
  let n = 1;
  if (2 === n) {
    console.log("O numero está certinho");
  } else {
    console.log("Numero não é igual");
  }
};

cron.schedule("*/5 * * * * *", () => {
  verifyNumber();
});

app.listen(3000);
