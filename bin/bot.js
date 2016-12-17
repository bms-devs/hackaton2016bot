'use strict';

var Bot = require('slackbots');
var lodash = require('lodash');

var settings = {
  token: process.env.SLACK_BOT_TOKEN,
  name: 'WC Bot'
};

var bot = new Bot(settings);

bot.on('start', function() {
  bot.postMessageToChannel('wc-test', 'siema heniu!');
});

bot.on('message', function(msg) {
  var user = lodash.find(bot.users, function(u) {
    return u.id == msg.user;
  });
  bot.postMessageToUser(user.name, "don't know", {as_user: true});
});