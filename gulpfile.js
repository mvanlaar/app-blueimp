var gulp = require('gulp'),
    concat = require("gulp-concat");

var bases = {
  blueimp: "bower_components/blueimp/",
  distLib: "dist/lib/blueimp/"
};

// task
gulp.task("import-library", function () {
    // BlueImp JS - merge if I have many...
    gulp.src([
            bases.blueimp + "js/jquery.blueimp-gallery.min.js"
        ]) 
        .pipe(concat('blueimp-set.js')) // concat 
        .pipe(gulp.dest(bases.distLib + "js/"));

    // Blueimp CSS
    gulp.src(bases.blueimp + "css/blueimp-gallery.min.css")
        .pipe(concat("blueimp-set.css")) // concat 
        .pipe(gulp.dest(bases.distLib + "css/"));

    // Blueimp images / icons
    gulp.src(bases.blueimp + "img/*.*")
        .pipe(gulp.dest(bases.distLib + "img/"));

});
