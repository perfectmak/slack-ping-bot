"use strict"

const ping = require('ping-stats');

const instructions = 'Hi, to use me, just mention me with an address domain name that you want to ping. \n' + 
					'e.g \'@ping google.com\'';
const greeting = 'Hello, you can use me to ping a server of your choice.';
const helloWords = [
	'hello', 'hi', 'howdy'
];
const helpWord = 'help';

/**
* Extracts the actual text from a slack link text formating.
* e.g sanitizeLink('<http://google.com|google.com>') -> 'google.com'
*/
const sanitizeLink = (input) => {
	const urlParts = input.trim().split('|');

	if(urlParts.length > 1){
		return urlParts[1].replace('>', '');
	}
	else
		return input;
}

/**
* Returns a friendly format for the ping
*/
const formatPingResult = (pingObj) => {
	if(pingObj.isAlive) {
		return `The host: ${pingObj.host} is active. \n\nPing Output:\n${pingObj.output}`;
	}
	else {
		return  `The host: ${pingObj.host} could not be resolved`;
	}
}

/**
* Processes a users message and gives relevant output
*/
const processRequest = (message, output)  => {
	if(helloWords.indexOf(message.toLowerCase()) != -1) {
		return output(greeting);
	}

	if(message.toLowerCase() === helpWord) {
		return output(instructions);
	}	

	ping.sys.probe(sanitizeLink(message), (result, error) => {
		if(error) {
			console.log('error'. error);
		}
		else {
			output(formatPingResult(result));
		}
	});
}

module.exports = processRequest;