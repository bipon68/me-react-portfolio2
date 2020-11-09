const express = require ("express");
const bodyParser= require('body-parser')


const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('test')
    res.send('Hello from home page')
})

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));

