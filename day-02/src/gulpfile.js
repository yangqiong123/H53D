//1.引包
var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var browser = require('browser-sync');
var reload = browser.reload;

/*-------编译sass-----------*/

gulp.task('buildSass',function(){
	gulp.src('./sass/*.scss')
	.pipe(gulpSass())
	.pipe(gulp.dest("./css"))
	.pipe(reload({stream:true}))
})

gulp.task('autoBuild',function(){
	browser({
		server:'./'
	})
	gulp.watch('./sass/*.scss',['buildSass'])
	gulp.watch('./index.html').on('change',reload)
})
