const express = require('express');
const bodyParser = require('body-parser'); // middleware for express
const Blockchain = require('./blockchain');

const app = express();
const blockchain = new Blockchain();

app.use(bodyParser.json());

app.get('/api/blocks', (req, res) => { // read data from the backend .get is from express
    res.json(blockchain.chain); // this will send the blockchain.chain to whoever makes the get request with /api/blocks endpoint
}); 

app.post('/api/mine', (req, res) => {
    const { data } = req.body; // destructuring the data field from body request that will be coming in 

    blockchain.addBlock({ data }); // this will add a new block with the data from the requester

    res.redirect('/api/blocks'); // this will send you back to the /api/blocks endpoint to see if your block was added 
});

const PORT = 3000;
app.listen(PORT, () => console.log(`listening at localhost: ${PORT}`));