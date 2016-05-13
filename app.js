"use strict"

// load local environment variable if any
require('dotenv').load();

const pingBot = require('./ping-bot');

const BeepBoop = require('beepboop-botkit');
const Botkit = require('botkit');

const controller = Botkit.slackbot();
const beepboop = BeepBoop.start(controller, {
	debug: true
});

// say hi when joining a channel
controller.on('bot_channel_join', (bot, message) => {
  bot.reply(message, 'I\'m here!')
});

// handle when a direct message is sent
controller.on(['direct_message', 'direct_mention'], (bot, message) => {
	console.log(message);
	
	pingBot(message.text, (response) => {
		bot.reply(message, response);
	});
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
