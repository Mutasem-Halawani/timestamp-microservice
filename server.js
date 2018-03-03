const express = require('express');
const moment = require('moment');
const port = 3000;

const app = express();

app.get('*', (req, res) => {
  var date = req.path.substr(1);
  console.log('date: ',Boolean(date));
  var regex = /(%20)/g;

    if (Boolean(date)) { //If parameter passed
      if (regex.test(date)) { //Natural Date Given
        let naturalDate = date.replace(regex, ' ');
        let unixDate = moment(new Date(naturalDate)).unix();
        if (naturalDate === 'Invalid Date' || Date.parse(date)) {
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify({
            "unix": null,
            "natural": null
          }));
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify({
            "unix": unixDate,
            "natural": naturalDate
          }));
        }
      } else { //Unix Date Given
        let naturalDate = moment.unix(date).format('MMMM DD, YYYY');
        let unixDate = date;
        if (naturalDate === 'Invalid date') {
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify({
            "unix": null,
            "natural": null
          }));
        } else {
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify({
            "unix": unixDate,
            "natural": naturalDate
          }));
        }
      }
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({
        "unix": null,
        "natural": null
      }));
    }
});

app.listen(port);
