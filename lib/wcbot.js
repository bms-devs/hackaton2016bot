'use strict';

var util = require('util');
var http = require('http');
var https = require('https');
var Bot = require('slackbots');

var WcBot = function Constructor(settings) {
    this.settings = settings;
    this.settings.name = this.settings.name || 'wcbot';
};

util.inherits(WcBot, Bot);

module.exports = WcBot;

WcBot.prototype.run = function() {
    WcBot.super_.call(this, this.settings);

    this.on('start', this._onStart);
    this.on('message', this._onMessage);
};

WcBot.prototype._onStart = function() {
    this._loadBotUser();
    this._welcomeMessage();
};

WcBot.prototype._loadBotUser = function() {
    var self = this;
    this.user = this.users.filter(function(user) {
        return user.name === self.name;
    })[0];
};

WcBot.prototype._welcomeMessage = function() {
    this.postMessageToChannel(this.channels[0].name, 'Siema henie!' +
        '\n Napisz `WC` albo ' + this.name + '` żeby mnie uruchomić!', {
            as_user: true
        });
};

WcBot.prototype._onMessage = function(message) {
    if (this._isChatMessage(message) &&
        !this._isChannelConversation(message) &&
        !this._isFromWcBot(message) &&
        this._isMentioningWc(message)
    ) {
        this._replyWithHttpsConnection(message);
    }
};

WcBot.prototype._isChatMessage = function(message) {
    return message.type === 'message' && Boolean(message.text);
};

WcBot.prototype._isChannelConversation = function(message) {
    return typeof message.channel === 'string' && message.channel[0] === 'C';
};

WcBot.prototype._isFromWcBot = function(message) {
    return message.user === this.user.id;
};

WcBot.prototype._isMentioningWc = function(message) {
    return message.text.toLowerCase().indexOf('wc') > -1 || message.text.toLowerCase().indexOf(this.name) > -1;
};


WcBot.prototype._replyWithHttpsConnection = function(originalMessage) {
    var self = this;
    https.request(this.settings.httpsOptions, function(response) {
        var str = '';

        response.on('data', function(chunk) {
            str += chunk;
        });

        response.on('end', function() {
            var user = self._getUserById(originalMessage.user);
            self.postMessageToUser(user.name, self._parseWcOccupationJSON(str), {
                as_user: true
            });
        });
    }).end();
};

WcBot.prototype._parseWcOccupationJSON = function(message) {
    var wc = JSON.parse(message);
    return wc.filter(function(item) {
        return item.occupied == false;
    }).map(function(item) {
        return item.name;
    }).join(", ");
};

WcBot.prototype._getUserById = function(userId) {
    return this.users.filter(function(user) {
        return user.id === userId;
    })[0];
};
