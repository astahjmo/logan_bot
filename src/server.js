const express = require('express');
const app = express();
const port = 3000;


console.log("Ligando o servidor!")
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port)