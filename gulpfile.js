var gulp = require("gulp");
var htmlmin = require("gulp-htmlmin");
var refresh = require("gulp-refresh");

const config = require("./package.json");

gulp.task("minify", function() {
  return gulp
    .src(`${config.__enviroment.__beta_destination}/**/*.html`)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(`${config.__enviroment.__prod_destination}`));
});

gulp.task("assets", function() {
  return gulp
    .src(`view/assets/**/*`)
    .pipe(gulp.dest(`${config.__enviroment.__beta_destination}/assets`));
});

gulp.task("assets_to_prod", function() {
  return gulp
    .src(`${config.__enviroment.__beta_destination}/assets/**/*`)
    .pipe(gulp.dest(`${config.__enviroment.__prod_destination}/assets`));
});

gulp.task("watch", function() {
  refresh.listen();
  gulp.watch("view/**/*", ["assets"]);
});

gulp.task("default", ["minify", "assets_to_prod"]);
