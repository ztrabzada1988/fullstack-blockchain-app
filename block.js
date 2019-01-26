class Block {
    constructor({ timestamp, lastHash, hash, data }) { // these 4 is what a block contains. When you wrap in {} the order wont matter
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
    }
}

const block1 = new Block({
    timestamp:'01/01/01', 
    lastHash: 'foo-lastHash', 
    hash: 'foo-hash', 
    data: 'foo-data'
}); // new instance of Block

console.log(block1);