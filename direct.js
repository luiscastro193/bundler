"use strict";
import {readFile, writeFile} from 'fs/promises';
import {minify} from '@swc/core';

if (process.argv.length < 3)
	throw "Pass the JavaScript entry file as an argument";

let code = await readFile(process.argv[2], 'utf8');
writeFile("build.js", (await minify(code, {toplevel: true})).code);
