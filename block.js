const { GENESIS_DATA } = require('./config');
const cryptoHash = require('./crypto-hash');

class Block {
    constructor({ timestamp, lastHash, hash, data }) { // these 4 is what a block contains. When you wrap in {} the order wont matter
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }

    // genesis is the first block of the blockchain
    static genesis() { // static methods aren't called on instances of a class. They are utility functions within a class
        return new this(GENESIS_DATA); // this is same as Block but in static func.
    }

    static mineBlock({ lastBlock, data }) {
        const timestamp = Date.now();
        const lastHash = lastBlock.hash;

        return new this({
            timestamp,
            lastHash,
            data,
            hash: cryptoHash(timestamp, lastHash, data)
        });
    }
}

module.exports = Block;

