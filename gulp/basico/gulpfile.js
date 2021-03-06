const gulp = require('gulp')

gulp.task('default', () => {
    gulp.start('copiar', 'fim')
})

gulp.task('copiar', ['antes1', 'antes2'], () => {
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    //gulp.src('pastaA/**/*.txt') copia subpastas tambem
    //gulp.src('pastaA/*.txt') tambem funciona
        // .pipe(transformacao1()) //função que encadeia uma chamada a outra
        // .pipe(transformacao2())
        .pipe(gulp.dest('pastaB'))
})

gulp.task('antes1', ()=> {
    console.log('Antes1!!!')
})

gulp.task('antes2', () => {
    console.log('Antes2!!!')
})

gulp.task('fim', () => {
    console.log('Fim!!!')
})