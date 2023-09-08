#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program.version('0.0.1');

program.description('Compares two configuration files and shows a difference.');

program.arguments('<filepath1> <filepath2>');

program.action((filepath1, filepath2) => {
  console.log('filepath1:', filepath1);
  console.log('filepath2:', filepath2);
});

program.helpOption('-h, --help', 'output usage information');

program.option('-f, --format <type>', 'output format');

program.parse();
