const { GENESIS_DATA } = require('./config');

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
        return new this({
            timestamp: Date.now(),
            lastHash: lastBlock.hash,
            data
        });
    }
}

module.exports = Block;

