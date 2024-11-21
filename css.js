"use strict";
import {writeFile} from 'fs/promises';
import {bundle} from 'lightningcss';

if (process.argv.length < 3)
	throw "Pass the CSS entry file as an argument";

writeFile("styles.css", bundle({filename: process.argv[2], minify: true}).code);
