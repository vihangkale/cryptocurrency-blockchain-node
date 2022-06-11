//import that secure hash algorithm from the crypto-js package
const SHA256 = require("crypto-js/sha256");

//create a JavaScript class to represent a Block
// Proof of work: The amount of computational effort required to get a block hash
// Block hash: Block ID derived through cryptographic calculation
// Timestamp: Time when the block was created
// Index: Block’s position on the chain
// Data recorded on the blockchain
// The previous block’s hash
class Block {
  constructor(index, timestamp, data, previousHash) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.generateHash();
  }

  ///encryts block hash id
  //generates and returns the hash of the block using the properties defined in the constructor
  generateHash() {
    return SHA256(
      this.index +
        this.timestamp +
        this.previousHash +
        JSON.stringify(this.data)
    ).toString();
  }
}

class Blockchain {
  constructor() {
    this.blockchain = [this.createGenesisBlock()];
  }
  //A genesis block is the initial block in a blockchain, which you can link other blocks to. You can also refer to the genesis block as the ancestor block. and it has no reference
  createGenesisBlock() {
    return new Block(0, "11/06/2022", "first block on the chain", "0");
  }
  //get the latest block from the blockchain
  getTheLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }

  addNewBlock(newBlock) {
    newBlock.previousHash = this.getTheLatestBlock();
    newBlock.hash = newBlock.generateHash();
    this.blockchain.push(newBlock);
  }

  //testing the integrity of the chain
  validateChainIntegrity() {
    for (let i = 1; i < this.blockchain.length; i++) {
      const currentBlock = this.blockchain[i];
      if (currentBlock.hash !== currentBlock.generateHash()) {
        return false;
      }
      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
      return true;
    }
  }
}

let logCoin = new Blockchain();

console.log("mining logcoin in progress...");
logCoin.addNewBlock(
  new Block(1, "06/04/2022", {
    sender: "Frank Joseph",
    recipient: "LogJavasriptno",
    quantity: 25,
  })
);

// logCoin.addNewBlock(
//   new Block(2, "08/08/2022", {
//     sender: "Paul val",
//     recipient: "Young A",
//     quantity: 34,
//   })
// );

// logCoin.addNewBlock(
//   new Block(3, "13/08/2022", {
//     sender: "Elena",
//     recipient: "Mary",
//     quantity: 34,
//   })
// );
console.log(JSON.stringify(logCoin, null, 5));

module.exports = {
  logCoin,
};
