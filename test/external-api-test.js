var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var sinon = require('sinon');
var WcBot = require('../lib/wcbot');

describe('Testing connectivity to external API', () => {
    var bot = new WcBot(); 

    it("Should get the information from external API", () => {
        var _onStart = sinon.stub(bot, '_onStart');
        expect( () => {
            bot.run();
            sinon.assert.called(_onStart);
        })
    });
});
