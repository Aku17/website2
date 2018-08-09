const gulp = require('gulp');

const uglify = require('gulp-uglify');

const sass = require('gulp-sass');

const concat = require('gulp-concat');

const webserver = require('gulp-webserver');

const htmlmin = require('gulp-htmlmin');


gulp.task('webserver', function() {
  gulp.src('dist')
    .pipe(webserver({
      open: 'http://localhost:8000/index.html',
      livereload: true,
      directoryListing: {
		  enable: true,
		  path: 'dist'
		}
    }));
});


gulp.task('copyHtml', function(){
	gulp.src('src/*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist'));
})

gulp.task('copyincludeHtml', function(){
	gulp.src('src/include/*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('dist/include'));
})

gulp.task('images', function(){
	gulp.src('src/images/**/*.{gif,jpg,png,svg}')
	.pipe(gulp.dest('dist/images'));
})

gulp.task('sass', function(){
	gulp.src('src/css/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(sass({ // Compile Sass using LibSass.
             errLogToConsole: true,
             outputStyle: 'compressed' // Options: nested, expanded, compact, compressed
         }))
	.pipe(gulp.dest('dist/css'));
});

gulp.task('vendorcss', function(){
	gulp.src('src/css/vendor/*.css')
	.pipe(concat('vendor.min.css'))
	.pipe(gulp.dest('dist/css'));
});

gulp.task('scripts', function(){
	gulp.src('src/js/*.js')
		.pipe(concat('biz-scripts.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
});

gulp.task('vendorjs', function(){
	gulp.src('src/js/vendor/*.js')
		.pipe(concat('vendor.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
});

gulp.task('copyxml', function(){
	gulp.src('src/*.xml')
	.pipe(gulp.dest('dist'));
})

// gulp.task('copyfonts', function() {
//    gulp.src('src/fonts/**/*.{ttf,woff,eof,svg}')
//    .pipe(gulp.dest('dist/fonts'));
// });

gulp.task('default', ['copyHtml', 'sass', 'scripts', 'vendorjs', 'vendorcss', 'copyincludeHtml', 'images', 'copyxml']);

gulp.task('watch', function(){
	gulp.watch('src/js/*.js', ['scripts']);
	gulp.watch('src/css/*.scss', ['sass']);
	gulp.watch('src/*.html', ['copyHtml']);
	gulp.watch('src/js/vendor/*.js', ['vendorjs']);
	gulp.watch('src/css/vendor/*.css', ['vendorcss']);
	gulp.watch('src/include/*.html', ['copyincludeHtml']);
	// gulp.watch('src/fonts/**/*.{ttf,woff,eof,svg}', ['copyfonts']);
});

