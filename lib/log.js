var winston = require('winston');

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      json: false,
      timestamp: true,
      colorize: true
    }),
    new winston.transports.File({
      filename: __dirname + '/debug.log',
      json: false,
      level: 'debug',
      levelOnly: 'true'
    })
  ],
  exceptionHandlers: [
    new (winston.transports.Console)({
      json: false,
      timestamp: true,
      colorize: true
    }),
    new winston.transports.File({
      filename: __dirname + '/exceptions.log',
      json: false
    })
  ],
  exitOnError: false
});

logger.level = process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 'info'

module.exports = logger;
