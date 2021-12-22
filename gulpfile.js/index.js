/**
 *
 * Gulpfile
 *
 * @author Takuto Yanagida
 * @version 2021-12-22
 *
 */

'use strict';

const RESET_SRC = 'node_modules/nacss-reset/dist/css/*';
const SUB_REPS = [
	'align',
	'container',
	'content',
	'font',
	'form',
	'link',
	'list',
	'tab',
	'table',
	'viewer',
	'utility',
];

const gulp = require('gulp');

const { makeCopyTask } = require('./task-copy');


// -----------------------------------------------------------------------------


const css    = makeCopyTask(RESET_SRC, './dist/css');
const sass_s = SUB_REPS.map(e => makeCopyTask(`node_modules/nacss-${e}/src/sass/*`, `./dist/sass/${e}/`));
const js_s   = SUB_REPS.map(e => makeCopyTask(`node_modules/nacss-${e}/src/js/*`, `./dist/js/${e}/`));

const js = makeCopyTask('src/js/*', './dist/js/_/');

exports.default = gulp.parallel(css, ...sass_s, ...js_s, js);
