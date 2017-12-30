
var BaseBot = require('./lib/Bot');

let randomNumber = Math.floor((Math.random() * 100)) + 1; 
console.log('randomNumber:' + randomNumber);

class Bot extends BaseBot{
    constructor (postData) {
        super(postData);

        this.addLaunchHandler(() => {
            this.waitAnswer();
            let msg = '欢迎来到猜数字。请猜一个1-100以内的数字。';
            let card = new Bot.Card.TextCard(msg);
            return {
                card: card,
                outputSpeech: msg
            };
        });
        this.addSessionEndedHandler(() => {
            this.endSession();
            let msg = '谢谢使用猜数字。';
            let card = new Bot.Card.TextCard(msg);
            return {
                card: card,
                outputSpeech: msg
            };
        });

        this.addIntentHandler('start_guess_number', () => {
            let msg = '请猜一个1-100以内的数字。';
            let card = new Bot.Card.TextCard(msg);
            return {
                card: card,
                outputSpeech: msg
            };
        });

        this.addIntentHandler('guess_number', () => {
            let num = this.getSlot('number');
            let msg = '';
            if (num < 0 || num > 100) {
              msg = '请猜一个0-100以内的数字。';
              this.nul.ask('number');
            }
            else if (num > randomNumber) {
              msg = '太大了';
              this.nlu.ask('number');
            } else if (num < randomNumber) {
              msg = '太小了';
              this.nlu.ask('number');
            } else {
              msg = '猜对了！';
              this.endSession();
            }
            let card = new Bot.Card.TextCard(msg);
            return {
                card: card,
                outputSpeech: msg
            };
        });

   }
}

module.exports = Bot;
