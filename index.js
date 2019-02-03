const express = require('express');
const Blockchain = require('./blockchain');

const app = express();
const blockchain = new Blockchain();

app.get('/api/blocks', (req, res) => { // read data from the backend .get is from express
    res.json(blockchain.chain); // this will send the blockchain.chain to whoever makes the get request with /api/blocks endpoint
}); 


const PORT = 3000;
app.listen(PORT, () => console.log(`listening at localhost: ${PORT}`));