const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const livereload = require('gulp-livereload');
const run = require('gulp-run-command').default;
const http = require('http');
const st = require('st');

const config = require("./package.json");

const ENV = process.env.NODE_ENV || config.__enviroment.__beta_destination;
const PORT = process.env.PORT || config.__enviroment.__port;

gulp.task('server', function (done) {
    http.createServer(st({
        path: `${__dirname}/${ENV}`,
        index: 'index.html',
        cache: false
    })).listen(PORT, done);
});

// generate site
gulp.task("generate", run('node generator.js'));

// minify task
gulp.task("minify", function () {
    return gulp
        .src(`./beta/**/*.html`)
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(`${config.__enviroment.__prod_destination}`));
});

gulp.task("assets", function () {
    return gulp.src(`${__dirname}/theme/assets/**/*`).pipe(gulp.dest(`${ENV}/assets`));
});

// start watch task
gulp.task("watch", ['generate', 'server', 'assets'], function () {
    livereload.listen({
        basePath: ENV
    });
    gulp.watch(["view/**/*", 'data.js'], ["generate", "assets"]);
});

// default gulp task
gulp.task("default", ["assets", "minify"]);
