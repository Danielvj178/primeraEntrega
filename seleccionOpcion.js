const { opciones } = require('./menu.js');
const { cursos } = require('./cursos');

/** Ingreso de valores */
const argv = require('yargs')
			.command('menu','Datos del curso', opciones)
			.argv;

/** Busqueda del curso */
let curso = cursos.find(curso => curso.id == argv.i);

if( curso ) {
	console.log('--- Información del curso seleccionado ---');
	console.log(curso)	
	console.log('--- Información del estudiante ---');
	console.log('Cedula:  '+argv.c);
	console.log('Nombre: '+argv.n);
	var fs = require('fs');
	var stream = fs.createWriteStream("Informacion.txt");
	stream.once('open', function(fd) {
	  stream.write('--- Información del curso seleccionado --- \n');
	  stream.write('Id del curso: '+curso.id.toString()+"\n");
	  stream.write('Nombre del curso: '+curso.nombre+"\n");
	  stream.write('Duración del curso: '+curso.duracion+"\n\n");
	  stream.write('--- Información del estudiante --- \n');
	  stream.write('Cédula del estudiante: '+argv.c+"\n");
	  stream.write('Nombre del estudiante: '+argv.n+"\n");
	  stream.end();
	});
	console.log('Archivo creado con la información');
} else {
	console.log('El curso solicitado no ha sido encontrado. Por favor ingrese nuevamente la información');
}