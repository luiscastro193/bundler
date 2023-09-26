"use strict";
import {rollup} from 'rollup';
import terser from '@rollup/plugin-terser';

if (process.argv.length < 3)
	throw "Pass the entry file as an argument";

const filePath = process.argv[2];
let build = await rollup({input: filePath, plugins: [terser()]});
await build.write({file: "build.js", format: 'iife'});
