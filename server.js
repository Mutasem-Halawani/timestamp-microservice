const express = require('express');
const path = require('path');
const port = Number(process.argv.PORT || 3000);
const timeService = require('./services/time.service.js');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/:time', (req, res) => {
  var date = req.params.time;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(timeService(date)));
});

app.listen(port, console.log(`listening on port ${port}`));
