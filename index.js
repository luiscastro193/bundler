"use strict";
const { rollup } = require("rollup");
const { terser } = require("rollup-plugin-terser");

if (process.argv.length < 3)
	throw("Pass the entry file as an argument");

const filePath = process.argv[2];

rollup({
	input: filePath,
	plugins: [
		terser()
	]
}).then(build => {
	build.write({
		file: "build.js",
		format: 'iife'
	})
})
