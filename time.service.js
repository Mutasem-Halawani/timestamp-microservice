const moment = require('moment');

const timeService = function (date) {
    console.log('date: ', date);

    var regex = /^[0-9]*$/g;
    var isNum = regex.test(date);

    if (isNum) {
        let naturalDate = moment.unix(date).format('MMMM DD, YYYY');
        let unixDate = Number(date);
        return {
            "unix": unixDate,
            "natural": naturalDate
        };
    } else if (moment(date, 'MMMM DD YYYY').isValid()) {
        let naturalDate = date;
        let unixDate = moment(new Date(date)).unix();
        return {
            "unix": unixDate,
            "natural": naturalDate
        };
    } else {
        return {
            "unix": null,
            "natural": null
        };
    }
};

module.exports = timeService;