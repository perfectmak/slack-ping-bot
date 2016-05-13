"use strict"

require('dotenv').load();

const pingBot = require('./ping-bot');

const BeepBoop = require('beepboop-botkit');
const Botkit = require('botkit');

const controller = Botkit.slackbot();
const beepboop = BeepBoop.start(controller);

// controller.spawn({
// 	  token: process.env.SLACK_TOKEN
// }).startRTM((err, bot, payload) => {
// 	if (err) {
// 	    throw new Error('Could not connect to Slack');
// 	}
// });

controller.on(['direct_message', 'direct_mention'], (bot, message) => {
	console.log(message);
	
	pingBot(message.text, (response) => {
		bot.reply(message, response);
	});
});

// after teams have been added
beepboop.on('add_resource', (message) => {
  Object.keys(beepboop.workers).forEach((id) => {
    // this is an instance of a botkit worker
    var bot = beepboop.workers[id]
  })
});

// Send the user who added the bot to their team a welcome message the first time it's connected
beepboop.on('botkit.rtm.started', (bot, resource, meta) => {
  const slackUserId = resource.SlackUserID

  if (meta.isNew && slackUserId) {
    bot.api.im.open({ user: slackUserId }, (err, response) => {
      if (err) {
        return console.log(err)
      }
      const dmChannel = response.channel.id
      bot.say({channel: dmChannel, text: 'Thanks for adding me to your team!'})
      bot.say({channel: dmChannel, text: 'Just /invite me to a channel!'})
    })
  }
})
