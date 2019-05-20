/** Require de archivos */
const { cursos, listadoCursos1, listadoCursos2, listadoCursos3 } = require('./cursos');

/** Llamado a funciones */
console.log('--- Cursos a ofrecer ---');
console.log(cursos[0]);
listadoCursos1(cursos[0]);
listadoCursos2(cursos[1], function(resultado){
	console.log(resultado);
});
listadoCursos3(cursos[2], function(resultado){
	console.log(resultado);
});