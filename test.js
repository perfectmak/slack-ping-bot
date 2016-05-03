"use strict"

const pingBot = require('./ping-bot');
const test = require('tape');

test('pingBot outputs Hello on hi', (t) => {
	['hello', 'Hi', 'howdy'].forEach((input) => {
		pingBot(input, (output) => {
			if(output.indexOf('Hello') == -1)
				t.fail(`Failed to say hello on '${input}' as input`);
			else
				t.pass(`Output hello on '${input}' as input`);
		});
	});
	t.end();
});

test('pingBot outputs instructions on help', (t) => {
	pingBot('help', (output) => {
		if((output.indexOf('e.g') == -1) && (output.indexOf('example') == -1))
			t.fail('Failed to output instructions when Input was help');
		else
			t.pass('Output instructions when help is asked');
	});
	t.end();
});
