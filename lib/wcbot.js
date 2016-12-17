'use strict';

var util = require('util');
var Bot = require('slackbots');

var WcBot = function Constructor(settings) {
    this.settings = settings;
    this.settings.name = this.settings.name || 'wcbot';
};

util.inherits(WcBot, Bot);

module.exports = WcBot;

WcBot.prototype.run = function () {
    WcBot.super_.call(this, this.settings);

    this.on('start', this._onStart);
    this.on('message', this._onMessage);
};

WcBot.prototype._onStart = function () {
    this._loadBotUser();
    this._welcomeMessage();
};

WcBot.prototype._loadBotUser = function () {
    var self = this;
    this.user = this.users.filter(function (user) {
        return user.name === self.name;
    })[0];
};

WcBot.prototype._welcomeMessage = function () {
  this.postMessageToChannel(this.channels[0].name, 'Siema henie!' +
          '\n Napisz `WC` albo ' + this.name + '` żeby mnie uruchomić!',
          {as_user: true});
};

WcBot.prototype._onMessage = function (message) {
  // console.log("_onMessage")
    if (this._isChatMessage(message) &&
        this._isChannelConversation(message) &&
        !this._isFromWcBot(message) &&
        this._isMentioningWc(message)
    ) {

        this._replyWithWcStatus(message);
    }
};

WcBot.prototype._isChatMessage = function (message) {
  console.log("isChatMessage " + message.type);
    return message.type === 'message' && Boolean(message.text);
};

WcBot.prototype._isChannelConversation = function (message) {
  console.log("_isChannelConversation " + message.channel);
    return typeof message.channel === 'string' &&
        message.channel[0] === 'C';
};

WcBot.prototype._isFromWcBot = function (message) {
  console.log("_isFromWcBot " + message.user);
    return message.user === this.user.id;
};

WcBot.prototype._isMentioningWc = function (message) {
  console.log("_isMentioningWc " + message.text);
    return message.text.toLowerCase().indexOf('wc') > -1 ||
        message.text.toLowerCase().indexOf(this.name) > -1;
};

WcBot.prototype._replyWithWcStatus = function (originalMessage) {
  console.log("_replyWithWcStatus " + originalMessage.user);
    var user = this._getUserById(originalMessage.user);
    this.postMessageToUser(user.name, "Idź na kawę zamiast do kibla.", {as_user: true});
};

WcBot.prototype._getUserById = function (userId) {
    var user = this.users.filter(function (user) {
        return user.id === userId;
    })[0];
    console.log("_getUserById " + user.name);
    return user;
};
