"use strict";
import {writeFile} from 'fs/promises';
import {bundle} from 'lightningcss';

if (process.argv.length < 3) {
	console.error("Pass the CSS entry file as an argument");
	process.exit(1);
}

writeFile("styles.css", bundle({filename: process.argv[2], minify: true}).code);
