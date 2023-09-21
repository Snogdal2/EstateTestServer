
const express = require('express');
const app = express();
const cors = require('cors')
const port = 3000;
const data = require('./sample4.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

