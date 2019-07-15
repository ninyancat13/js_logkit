const moment = require('moment')

var log = require('./logger.js');

const main = async () => {
    while (true) {
        log.info("hello world", {"greeting_count":1, "schmeckles": [1,2,3]});
        //log.info("hello world", {"greeting_count":1, "schmeckles": [1,2,3]}, "lang": "EN", "timestamp": moment.now(), });
        log.info("hello world", "again");
        await new Promise(resolve => setTimeout(resolve, 2000))
    }
}

main()
