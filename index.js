const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const app = express()
const port = process.env.port || 3000;

app.use(logger('dev'));
app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
    return res.status(200).json({ massage: "GET request to the home page"});
});

app.post('/', (req,res) => {
    return res.status(200).json({ massage: "POST request to the home page"});
});

app.put('/', (req,res) => {
    return res.status(200).json({ massage: "PUT request to the home page"});
});

app.delete('/', (req,res) => {
    return res.status(200).json({ massage: "DELETE request to the home page"});
});

app.listen(port, function () {
    console.log(`Server running at http://localhost:${port}`)
})