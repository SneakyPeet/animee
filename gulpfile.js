var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');
var concat = require('gulp-concat');

var reload = browserSync.reload;

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    });

    gulp.watch(["./animations/**/*.html", "./app/**/*.html"]).on('change', reload);
    gulp.watch('./src/js/*.js', ['js-watch'], reload);
    gulp.watch(["./animations/**/*.less", "./src/**/*.less"], ['less-watch'], reload);
});

gulp.task('less-watch', ['less'], reloadBrowser);

gulp.task('less', function() {
    gulp.src('./src/less/main.less')
            .pipe(less())
              .on('error', onError)
            .pipe(gulp.dest('./app'));
});

gulp.task('js-watch', ['js'], reloadBrowser);

gulp.task('js', function() {
    return gulp.src(['./src/js/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./app'))
});

gulp.task('default', ['serve']);

function reloadBrowser() {
  console.log('reload');
  reload();
}

function onError(err) {
  console.log(err);
  this.emit('end');
}
