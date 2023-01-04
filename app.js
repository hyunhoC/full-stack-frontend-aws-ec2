const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Nice work!!'));

app.listen(port, () => console.log(`Running on port: ${port}!`));