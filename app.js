"use strict"

require('dotenv').load();

const pingBot = require('./ping-bot');

const Botkit = require('botkit');
const controller = Botkit.slackbot();

controller.spawn({
	  token: process.env.SLACK_TOKEN
}).startRTM((err, bot, payload) => {
	if (err) {
	    throw new Error('Could not connect to Slack');
	}
});

controller.on(['direct_message', 'direct_mention'], (bot, message) => {
	console.log(message);
	
	pingBot(message.text, (response) => {
		bot.reply(message, response);
	});
});
