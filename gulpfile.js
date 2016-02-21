var gulp = require('gulp'),
    concat = require("gulp-concat");

var bases = {
    blueimp: "bower_components/blueimp/",
    src: "src/",
    distLib: "dist/lib/blueimp/",
    distApp: "dist/app/"
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

gulp.task("build-css", function() {
    gulp.src(bases.src + "view.css")
        .pipe(gulp.dest(bases.distApp));
});

gulp.task("watch", function() {
    gulp.watch(bases.src + "*.*", ["build-css"]);
});
