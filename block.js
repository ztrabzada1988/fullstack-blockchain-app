const hexToBinary = require('hex-to-binary');
const { GENESIS_DATA, MINE_RATE } = require('../config');
const { cryptoHash } = require('../util');

class Block {
  constructor({ timestamp, lastHash, hash, data, nonce, difficulty }) { // these 4 is what a block contains. When you wrap in {} the order wont matter
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
    this.nonce = nonce;
    this.difficulty = difficulty;
  }

  // genesis is the first block of the blockchain
  static genesis() { // static methods aren't called on instances of a class. They are utility functions within a class
    return new this(GENESIS_DATA); // this is same as Block but in static func.
  }

  static mineBlock({ lastBlock, data }) {
    const lastHash = lastBlock.hash;
    let hash, timestamp;
    let { difficulty } = lastBlock;
    let nonce = 0;


}

module.exports = Block;


