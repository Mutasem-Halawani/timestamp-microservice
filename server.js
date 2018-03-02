const express = require('express');
const port = 3000;

const app = express();

app.get('*', (req, res) => {
  console.log('req: ', req.path);
  res.send('hello world');
});

app.listen(port);
