var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');

var reload = browserSync.reload;

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(["./*.html", "./animations/**/*.html", "./app/**/*.html"]).on('change', reload);
    gulp.watch('./app/js/*.js').on('change', reload);
    gulp.watch(["./animations/**/*.less", "./app/**/*.less"], ['less-watch'], reload);
});

gulp.task('less-watch', ['less'], reloadBrowser);

gulp.task('less', function() {
    gulp.src('./app/less/main.less')
            .pipe(less())
              .on('error', onError)
            .pipe(gulp.dest('./app/css'));
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
