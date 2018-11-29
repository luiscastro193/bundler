"use strict";
const { rollup } = require("rollup");
const babel = require('rollup-plugin-babel');
const { terser } = require("rollup-plugin-terser");

const filePath = "entry.js";

rollup({
	input: filePath,
	plugins: [
		babel({presets: ['@babel/env']}),
		terser()
	]
}).then(build => {
	build.write({
		file: "build.js",
		format: 'iife'
	})
})
