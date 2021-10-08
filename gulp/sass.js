/*
  sass.js
  ===========
  compiles sass from assets folder
  also includes sourcemaps
*/

const gulp = require('gulp')
const sass = require('gulp-sass')(require('node-sass'))
const sourcemaps = require('gulp-sourcemaps')
const path = require('path')
const fs = require('fs')

const extensions = require('../lib/extensions/extensions')
const config = require('./config.json')

gulp.task('sass-extensions', function (done) {
  const fileContents = '$govuk-extensions-url-context: "/extension-assets"; ' + extensions.getFileSystemPaths('sass')
    .map(filePath => `@import "${filePath.split(path.sep).join('/')}";`)
    .join('\n')
  fs.writeFile(path.join(config.paths.lib + 'extensions', '_extensions.scss'), fileContents, done)
})

gulp.task('sass', function () {
  return gulp.src(config.paths.assets + '/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.paths.public + '/stylesheets/'))
})
