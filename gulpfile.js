let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

function style(done) {
    gulp.src('./src/styles/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./dist/styles'))
        .pipe(browserSync.stream());
    done();
}

function watch(done){
    browserSync.init({
        server:{
            baseDir: 'dist'
        },
        open: false
    });

    gulp.watch('./src/styles/*.sass', style);
    gulp.watch(['./dist/js/*.js', './dist/*.html']).on('change', browserSync.reload);

    done();
}

exports.default = gulp.series(style);
exports.watch = gulp.series(style, watch);