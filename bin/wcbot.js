'use strict';

var WcBot = require('../lib/wcbot');
var config = require('config');

var wcbot = new WcBot({
    token: process.env.BOT_API_KEY,
    httpsOptions: {
      token: process.env.API_TOKEN || config.get.token,
      host: config.get("host"),
      path: config.get("path")
    }
});

wcbot.run();
