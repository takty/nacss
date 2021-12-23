/**
 *
 * Gulpfile
 *
 * @author Takuto Yanagida
 * @version 2021-12-23
 *
 */

'use strict';

const SUB_REPS = [
	'align',
	'container',
	'content',
	'delay',
	'font',
	'form',
	'ja',
	'link',
	'list',
	'reset',
	'scroll',
	'tab',
	'table',
	'viewer',
	'utility',
];

const gulp = require('gulp');

const { makeCopyTask }       = require('./task-copy');
const { getNodeModulesPath } = require('./node-modules-path');

const NMP = getNodeModulesPath('gulp');


// -----------------------------------------------------------------------------


const sass_s = SUB_REPS.map(e => makeCopyTask(`${NMP}/nacss-${e}/src/sass/*`, `./dist/sass/${e}/`));
const js_s   = SUB_REPS.map(e => makeCopyTask(`${NMP}/nacss-${e}/src/js/*`, `./dist/js/${e}/`));

const js = makeCopyTask('src/js/*', './dist/js/_/');

exports.default = gulp.parallel(...sass_s, ...js_s, js);
