const express = require('express');
const path = require('path');
const port = Number(process.argv.port || 3000);
const timeService = require('./time.service.js');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/:time', (req, res) => {
  var date = req.params.time;
  timeService(date);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(timeService(date)));
});

app.listen(port, console.log(`listening on port ${port}`));
