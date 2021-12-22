/**
 *
 * Gulpfile
 *
 * @author Takuto Yanagida
 * @version 2021-12-08
 *
 */

'use strict';

const RESET_SRC = 'node_modules/nacss-reset/dist/css/*';

const gulp = require('gulp');

const { makeJsTask }        = require('./task-js');
const { makeSassTask }      = require('./task-sass');
const { makeCopyTask }      = require('./task-copy');
const { makeTimestampTask } = require('./task-timestamp');


// -----------------------------------------------------------------------------


const js = makeJsTask('src/js/[^_]*.js', './dist/js', './src/js');

const sass = makeSassTask('./src/sass/[^_]*.scss', './dist/css', './src/sass');

const css = makeCopyTask(RESET_SRC, './dist/css');

const watch = (done) => {
	gulp.watch('src/**/*.js', js);
	gulp.watch('src/**/*.scss', sass);
	done();
};

exports.build   = gulp.parallel(js, sass, css);
exports.default = gulp.series(exports.build, watch);


// -----------------------------------------------------------------------------


const doc_js = gulp.series(js, makeCopyTask(['dist/js/*'], './docs/js'));

const doc_css = gulp.series(css, sass, makeCopyTask(['dist/css/*'], './docs/css'));

const doc_sass = makeSassTask('docs/style.scss', './docs/css');

const doc_timestamp = makeTimestampTask('docs/**/*.html', './docs');

const doc_watch = (done) => {
	gulp.watch('src/**/*.js', gulp.series(doc_js, doc_timestamp));
	gulp.watch('src/**/*.scss', gulp.series(doc_css, doc_timestamp));
	gulp.watch('docs/style.scss', gulp.series(doc_sass, doc_timestamp));
	done();
};

const doc_build = gulp.parallel(doc_js, doc_css, doc_sass, doc_timestamp);

exports.doc = gulp.series(doc_build, doc_watch);
