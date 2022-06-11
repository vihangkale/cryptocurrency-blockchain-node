const coin = require("./nodejsCoin");

const createCrypto = (request, response) => {
  coin.logCoin.addNewBlock(
    new Block(1, "06/04/2022", {
      sender: "Frank Joseph",
      recipient: "LogJavasriptno",
      quantity: 25,
    })
  );
  response.status(200).send(`Crytocurrency block created`);
};

module.exports = {
  createCrypto,
};
