'use strict';

var WcBot = require('../lib/wcbot');
var config = require('config');

var wcbot = new WcBot({
    token: process.env.BOT_API_KEY,
    httpOptions: {
      host: config.get.host,
      path: config.get.path,
      token: process.env.API_TOKEN || config.get.token
    }
});

wcbot.run();
