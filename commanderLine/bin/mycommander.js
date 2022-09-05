#!/usr/bin/env node

var commander = require('commander');

var program = new commander.Command();

program.version("1.0.0");

program.command('init')
	.option('-e, --env <env>', 'the used environment', 'development')
	.action(function(opts) {
		console.log(opts);
	});

program.parse(process.argv);