var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');

var reload = browserSync.reload;

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    });

    gulp.watch('./app/*.html').on('change', reload);
    gulp.watch("./animations/**/*.less", ['less-watch'], reload);
});

gulp.task('less-watch', ['animation-less'], reloadBrowser);

gulp.task('animation-less', function() {
    gulp.src('./animations/animations.less')
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
