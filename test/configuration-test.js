var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var WcBot = require('../lib/wcbot');

describe('App configuration', () => {
    var bot = new WcBot();  
    
    it('WcBot should be configured', () => {
        expect(bot.settings).to.be.undefined;
    });
    
    it('should be called wcbot', () => {
        expect(bot.name).to.eql('wcbot');
    });

    it('Should throw when lacking Slack API key', () => {
        expect( () => {
            bot.run();
        }).to.throw("Cannot read property \'token\' of undefined");
    })
});