'use strict';

var Bot = require('slackbots');

var settings = {
  token: process.env.SLACK_BOT_TOKEN,
  name: 'WC Bot'
};

var bot = new Bot(settings);

bot.on('start', function() {
  bot.postMessageToChannel('wc-test', 'siema heniu!');
});

//bot.run();
