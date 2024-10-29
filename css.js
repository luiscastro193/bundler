"use strict";
import {readFile, writeFile} from 'fs/promises';
import {transform} from 'lightningcss';

if (process.argv.length < 3)
	throw "Pass the css file as an argument";

writeFile("styles.css", transform({code: await readFile(process.argv[2]), minify: true}).code);
