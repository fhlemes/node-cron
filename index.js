const express = require("express");
const cron = require("node-cron");

app = express();

verifyNumber = () => {
  let n = 1;
  if (2 === n) {
    console.log("O numero é igual a 2");
  } else {
    console.log("O numero passado não é igual a 2");
  }
};

// executa uma verificação a cada 5 segundos
cron.schedule("*/5 * * * * *", () => {
  verifyNumber();
});

app.listen(3000);
