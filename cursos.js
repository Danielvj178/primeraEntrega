const cursos = [
	{
		id:1,
		nombre:'Algebra',
		duracion: '1 semestre',
		valor: 150000
	},
	{
		id:2,
		nombre: 'Matemáticas financieras',
		duracion: '2 bimestres',
		valor: 50000
	},
	{
		id:3,
		nombre: 'Programación Avanzada',
		duracion: '4 trimestres',
		valor: 200000
	}
];

let listadoCursos1 = (curso) => {
	console.log('El id del curso es: '+curso.id);
	console.log('El nombre del curso es: '+curso.nombre);
	console.log('La duración del curso es: '+curso.duracion);
	console.log('El valor del curso es: '+curso.valor);
}

let listadoCursos2 = (curso, callback) => {
	setTimeout(function (){
		console.log('El id del curso es: '+curso.id);
		console.log('El nombre del curso es: '+curso.nombre);
		console.log('La duración del curso es: '+curso.duracion);
		console.log('El valor del curso es: '+curso.valor);
	}, 2000);
}

let listadoCursos3 = (curso) => {
	setTimeout(function (){
		console.log('El id del curso es: '+curso.id);
		console.log('El nombre del curso es: '+curso.nombre);
		console.log('La duración del curso es: '+curso.duracion);
		console.log('El valor del curso es: '+curso.valor);
	}, 4000);
}

module.exports = {
	cursos,
	listadoCursos1,
	listadoCursos2,
	listadoCursos3
};