const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Olá Kelvin');
});

app.listen(3001);