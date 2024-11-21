"use strict";
import {writeFile} from 'fs/promises';
import {rollup} from 'rollup';
import {minify} from '@swc/core';

if (process.argv.length < 3)
	throw "Pass the JavaScript entry file as an argument";

let code = (await (await rollup({input: process.argv[2]})).generate({})).output[0].code;
writeFile("build.js", (await minify(code, {module: true})).code);
