'use strict';

var WcBot = require('../lib/wcbot');
var config = require('config');

var wcbot = new WcBot({
    token: process.env.BOT_API_KEY,
    httpsOptions: {
      host: config.get("host"),
      path: config.get("path"),
      auth: process.env.API_AUTH || config.get("auth")
    }
});

wcbot.run();
