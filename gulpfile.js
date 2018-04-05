const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const run = require('gulp-run-command').default;

const config = require("./package.json");

// generate site
gulp.task("generate", run('node generator.js'));

// minify task
gulp.task("minify", function() {
  return gulp
    .src(`${config.__enviroment.__beta_destination}/**/*.html`)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(`${config.__enviroment.__prod_destination}`));
});

// start watch task
gulp.task("watch", function() {
  gulp.watch(["view/**/*", 'data.js'], ["generate"]);
});

// default gulp task
gulp.task("default", ["generate", "minify"]);
