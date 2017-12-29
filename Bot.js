
var BaseBot = require('./../../index');

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

        this.addIntentHandler('initiate-guess-number', () => {
            let msg = '欢迎来到猜数字。请猜一个1-100以内的数字。';
            let card = new Bot.Card.TextCard(msg);
            return {
                card: card,
                outputSpeech: msg
            };
        });

        this.addIntentHandler('guess-number', () => {
            let num = this.getSlot('number');
            //if (this.request.isDialogStateCompleted()) {
                let card = new Bot.Card.TextCard(num);
                //this.nlu.ask('再猜一猜');
                return {
                    card: card,
                    outputSpeech: '请你再猜一猜'
                };
            //}
        });

   }
}

module.exports = Bot;
