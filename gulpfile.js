var gulp = require('gulp'),
	watch = require('gulp-watch'),
	preFixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-sass'),
	sourceMaps = require('gulp-sourcemaps'),
	rigger = require('gulp-rigger'),
	cssMin = require('gulp-minify-css'),
	rimRaf = require('rimraf'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;
	gulpCopy = require('gulp-copy');
	
var path = {	
	build: {
		html: 'build/src/components',
		adminkaview: 'build/src/admin/',
		viewmodel: 'build/src/components',
		models: 'build/src/models',
		app: 'build/src/app',
		nls: 'build/src/nls',
		style: 'build/src/style/',
		modeling3d: 'build/src/3D/',
		adminka: 'build/src/admin/',
		common: 'build/src/common/', 
	},
	src: {
		html: 'src/components/**/*.html',
		adminkaview: 'src/admin/**/*.html',
		viewmodel: 'src/components/**/*.js/',
		models: 'src/models/**/*.js/',
		app: 'src/app/*.js/',
		nls: 'src/nls/*.js/',
		style: 'src/style/*.css/',
		modeling3d: 'src/3D/*.js',
		adminka: 'src/admin/**/*js',
		common: 'src/common/**/*.js',
	},
	clean: './build'
};

gulp.task("webserver", function(){
	browserSync({
		server: {
			baseDir: "./build"
		},
		host: 'localhost',
		port: 3000,
		tunnel: true
	});
});

gulp.task('htmlcomponents:build', function() {
  gulp.src(path.src.html)
	.pipe(rigger())
	.pipe(gulp.dest(path.build.html))
	.pipe(reload({stream: true}));
});

gulp.task('htmladmin:build', function() {
  gulp.src(path.src.adminkaview)
	.pipe(rigger())
	.pipe(gulp.dest(path.build.adminkaview))
	.pipe(reload({stream: true}));
});

gulp.task('html:build', [
	'htmlcomponents:build',
	'htmladmin:build'
]);

//***************** JS ******************

gulp.task('viewmodel:build', function () {
	gulp.src(path.src.viewmodel)
		.pipe(rigger())
		//.pipe(sourceMaps.init())
		.pipe(uglify())
		//.pipe(sourceMaps.write())
		.pipe(gulp.dest(path.build.viewmodel))
		.pipe(reload({stream: true}));
});

gulp.task('modeling3d:build', function () {
	gulp.src(path.src.modeling3d)
		.pipe(rigger())
		//.pipe(sourceMaps.init())
		.pipe(uglify())
		//.pipe(sourceMaps.write())
		.pipe(gulp.dest(path.build.modeling3d))
		.pipe(reload({stream: true}));
});

gulp.task('adminka:build', function () {
	gulp.src(path.src.adminka)
		.pipe(rigger())
		//.pipe(sourceMaps.init())
		.pipe(uglify())
		//.pipe(sourceMaps.write())
		.pipe(gulp.dest(path.build.adminka))
		.pipe(reload({stream: true}));
});

gulp.task('common:build', function () {
	gulp.src(path.src.common)
		.pipe(rigger())
		//.pipe(sourceMaps.init())
		.pipe(uglify())
		//.pipe(sourceMaps.write())
		.pipe(gulp.dest(path.build.common))
		.pipe(reload({stream: true}));
});

gulp.task('models:build', function () {
	gulp.src(path.src.models)
		.pipe(rigger())
		//.pipe(sourceMaps.init())
		.pipe(uglify())
		//.pipe(sourceMaps.write())
		.pipe(gulp.dest(path.build.models))
		.pipe(reload({stream: true}));
});

gulp.task('app:build', function () {
	gulp.src(path.src.app)
		.pipe(rigger())
		//.pipe(sourceMaps.init())
		.pipe(uglify())
		//.pipe(sourceMaps.write())
		.pipe(gulp.dest(path.build.app))
		.pipe(reload({stream: true}));
});

gulp.task('nls:build', function () {
	gulp.src(path.src.nls)
		.pipe(rigger())
		//.pipe(sourceMaps.init())
		.pipe(uglify())
		//.pipe(sourceMaps.write())
		.pipe(gulp.dest(path.build.nls))
		.pipe(reload({stream: true}));
});

gulp.task('js:build', [
	'viewmodel:build',
	'modeling3d:build',
	'adminka:build',
	'common:build',
	'models:build',
	'app:build',
	'nls:build'
]);

//**************************************

gulp.task('style:build', function() {
  gulp.src(path.src.style)
	//.pipe(sourceMaps.init())
	.pipe(sass())
	.pipe(preFixer())
	.pipe(cssMin())
	//.pipe(sourceMaps.write())
	.pipe(gulp.dest(path.build.style))
	.pipe(reload({stream: true}));
});

//************* copy ***********

gulp.task('copyfiles:build', function () {
    gulp.src('src/files/*')
        .pipe(gulp.dest('build/src/files/'));
});

gulp.task('copyimages:build', function () {
    gulp.src('src/images/**/*')
        .pipe(gulp.dest('build/src/images/'));
});

gulp.task('copystyleimages:build', function () {
    gulp.src('src/style/images/*')
        .pipe(gulp.dest('build/src/style/images/'));
});

gulp.task('copyconfig:build', function () {
    gulp.src('src/config.json')
        .pipe(gulp.dest('build/src/'));
});

gulp.task('copycompnls:build', function () {
    gulp.src('src/components/*/nls/*')
        .pipe(gulp.dest('build/src/components/'));
});

gulp.task('copycompimgs:build', function () {
    gulp.src('src/components/*/images/**/*')
        .pipe(gulp.dest('build/src/components/'));
});

gulp.task('copycompcss:build', function () {
    gulp.src('src/components/*/css/*')
        .pipe(gulp.dest('build/src/components/'));
}); 

//****************************

gulp.task('copyMain1:build', function () {
    gulp.src('Scripts/**/*')
        .pipe(gulp.dest('build/Scripts/'));
});

gulp.task('copyMain2:build', function () {
    gulp.src('Typings/**/*')
        .pipe(gulp.dest('build/Typings/'));
});

gulp.task('copyMain3:build', function () {
    gulp.src('admin.html')
        .pipe(gulp.dest('build/'));
});

gulp.task('copyMain4:build', function () {
    gulp.src('favicon.ico')
        .pipe(gulp.dest('build/'));
});

gulp.task('copyMain5:build', function () {
    gulp.src('index.html')
        .pipe(gulp.dest('build/'));
});

gulp.task('copyMain6:build', function () {
    gulp.src('login.html')
        .pipe(gulp.dest('build/'));
});


gulp.task('copyMain8:build', function () {
    gulp.src('start.js')
        .pipe(gulp.dest('build/'));
});

gulp.task('copymain:build', [
	'copyMain1:build',
	'copyMain2:build',
	'copyMain3:build',
	'copyMain4:build',
	'copyMain5:build',
	'copyMain6:build',
	'copyMain7:build',
	'copyMain8:build'
]);

//****************************

gulp.task('copy:build', [
	'copyfiles:build',
	'copyimages:build',
	'copyconfig:build',
	'copystyleimages:build',
	'copycompnls:build',
	'copycompimgs:build',
	'copycompcss:build', 
	'copymain:build'
]);

//gulp.task('copyfiles:build', function() {
//  gulp.src(copyFiles)
//	.pipe(gulpCopy(outputPath, options))
//	.dest(destination);
//});

//******************************

gulp.task('clean', function (callback) {
	rimRaf(path.clean, callback);
});

gulp.task('build', [
	'html:build',
	'js:build',
	'style:build',
	'copy:build'
]);

gulp.task('rebuild', ['clean'], function() {
	gulp.start('build');
});



















