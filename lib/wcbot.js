var Bot = require('slackbots');

var settings = {
  token: 'xoxb-117440560689-VvqPmvToCVQzF8yAFodajvw9',
  name: 'WC Bot'
};

var bot = new Bot(settings);

bot.on('start', function() {
  bot.postMessageToChannel('wc-test', 'siema heniu!');
});
