'use strict';

var WcBot = require('../lib/wcbot');

var token = process.env.BOT_API_KEY;

var wcbot = new WcBot({
    token: token
});

wcbot.run();
