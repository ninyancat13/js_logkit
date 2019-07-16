//logger.js
const INFO = "20"

module.exports = {
  info: function(message, data) {
    const { port, host } = require('./config');   
    const net = require('net');
    const client = new net.Socket();
    //const host = '127.0.0.1';
    //const port = 9200;
    const time = (new Date()).toISOString();
    const values = json_check(message, data)
    message = values[0]
    data = values[1]
    client.connect(port, host, function() {
      client.write("INFO::" + time + "::test_logging:" + INFO + "::" + message + "::" + data);
      console.log("INFO::" + time + "::test_logging:" + INFO + "::" + message + "::" + data);
      client.end()
    })
  },
  json_check: json_check
}

function json_check(message, data) {
  if (data != null) {
    if (isDict(data) == false) {
      message = `${message}:${data}`;
      data = `{}`
    } else {
        data = JSON.stringify(data);
      }
  }
  return [message, data];
}

function isDict(v) {
  return typeof v==='object' && v!==null && !(v instanceof Array) && !(v instanceof Date);
}






