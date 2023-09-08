#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program.version('0.0.1');

program.description('Compares two configuration files and shows a difference.');

program.helpOption('-h, --help', 'output usage information');

program.parse();