# Slack Ping App (formally Slack Ping Bot)

The Slack Ping Bot (for custom integration) can be found on the 'bare-bot' branch.

This codebase has been upgraded to a Slack App. You can install it on your Slack Team's account by Clicking [here](https://beepboophq.com/bots/416f4cd6690c452b9458b1211a6d7959).

Slack Ping App is bundled with a slack bot that can be used to make ping requests to a server.

## Installation and Usage

If you are interesting only in custom integration for your Slack Team, you can switch over to the 'bare-bot' branch or download the release tag bare-1.0.

Or else if you are interesting in installing this App on your slack team you can download it [here](https://beepboophq.com/bots/416f4cd6690c452b9458b1211a6d7959).

You can testing it out by a direct mention or direct message to the bot in your slack channel and saying 'hi' or 'help':
```
e.g
@ping: help
```

## Hosting Slack Bot
This particular App is hosted on [beepboophq.com](http://beepboophq.com). And I've taken the liberty of include 
a Dockerfile and bot.yml with default config that can work easily for you.

So OAuth for this app is handled explicitly by [beepboophq.com](http://beepboophq.com) and their BeepBoop-Botkit Library.

But if you know what you are doing, the actual ping bot is a module that can be required, so you can just handle User Authentication and Session handling and then try out some of the other options of hosting a slack bot listed on Slacks Website here: [https://api.slack.com/docs/hosting](https://api.slack.com/docs/hosting).

## Privacy
Since this is a stateless Bot. No personal information is being collected and the app is not logging any ping requests.
You are free to use it as you like.

## Contribution
Your a free to contribute and upgrade as you please.

## Licence
License under MIT License