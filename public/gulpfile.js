var gulp = require('gulp');
var bs = require('browser-sync').create();

gulp.task('browser-sync', function() {
    bs.init({
           proxy: "localhost:80"
    });
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("css/*.css").on('change', bs.reload);
});