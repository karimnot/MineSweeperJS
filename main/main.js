const MineSweeper = require('../controller/MineSweeper');


let buscaminas = new MineSweeper(10,10,10);


for (var i = 0; i < buscaminas.dimY; i++) {
	for (var j = 0; j < buscaminas.dimX; j++) {
		process.stdout.write(buscaminas.tablero[j][i].imprimir());
	}
	console.log('');	
}

console.log('********************************************');	

buscaminas.abrirCelda(0,0);


for (var i = 0; i < buscaminas.dimY; i++) {
	for (var j = 0; j < buscaminas.dimX; j++) {
		process.stdout.write(buscaminas.tablero[j][i].imprimir());
	}
	console.log('');	
}