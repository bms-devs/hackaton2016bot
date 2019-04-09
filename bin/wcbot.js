'use strict';

var WcBot = require('../lib/wcbot');
var config = require('config');
var host = process.env.API_HOST || config.get("host")

var wcbot = new WcBot({
    token: process.env.BOT_API_KEY,
    useHttps: host.startsWith("https"),
    httpOptions: {
      host: host.replace("https://", "").replace("http://", ""),
      path: config.get("path"),
      port: process.env.API_PORT || config.get("port") || 80,
      auth: process.env.API_AUTH || config.get("auth")
    },
    name: 'wcbot'
});

wcbot.run();
