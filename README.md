# Slack Ping Bot 

Slack Ping Bot is a slack bot that can be used to make ping requests to a server.

## Installation and Usage

To install, clone this repository and run
```
npm install
```
Then create a .env file to set environment variable defaults which is basically the SLACK_TOKEN key, you can just make a copy of .env.example and just update the values.

Then you can run the bot using
```
npm start
```

You can testing it out by a direct mention or direct message to the bot in your slack channel and saying 'hi' or 'help':
```
e.g
@ping: help
```

## Hosting Slack Bot
This particular bot is hosted on [beepboophq.com](http://beepboophq.com). And I've taken the liberty of include 
a Dockerfile and bot.yml with default config that can work easily for you.

Or you can try out some of the other options of hosting a slack bot listed on Slacks Website here: [https://api.slack.com/docs/hosting](https://api.slack.com/docs/hosting).

## Contribution
Your a free to contribute and upgrade as you please.

## Licence
License under MIT License