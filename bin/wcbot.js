'use strict';

var WcBot = require('../lib/wcbot');

var wcbot = new WcBot({
    token: process.env.BOT_API_KEY,
    httpOptions: {
      host: 'www.wp.pl',
      path: '/'
    }
});

wcbot.run();
