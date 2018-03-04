const express = require('express');
const path = require('path');
const timeService = require('./services/time.service.js');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/:time', (req, res) => {
  var date = req.params.time;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(timeService(date)));
});

app.listen(process.argv.PORT || 3000);
