var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

const config = require("./package.json");

gulp.task('minify', function() {
    return gulp.src(`${config.__enviroment.__beta_destination}/**/*.html`)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(`${config.__enviroment.__prod_destination}`));
});

gulp.task('watch', function() {
    gulp.watch('view/**/*', ['minify']);
});

gulp.task('default', ["minify"]);
