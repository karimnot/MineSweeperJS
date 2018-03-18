


class Celda {

	constructor(){
		this.estado = 'CERRADO';
		this.mina = false;
		this.numero = 0;
	}

};


Celda.prototype.marcarCelda = function(){
	switch (this.estado) {
		case 'CERRADO':
			this.estado = 'BANDERA';
			break;
		case 'BANDERA':
			this.estado = 'INTERROGACION';
			break;
		case 'INTERROGACION':
			this.estado = 'CERRADO';
			break;
	}
}

Celda.prototype.abrirCelda = function(){
	if (this.estado === 'CERRADO'){
		this.estado = 'ABIERTO';
	}
}

Celda.prototype.colocarMina = function(){
	this.mina = true;
}

Celda.prototype.isMina = function(){
	return this.mina;
}

Celda.prototype.imprimir = function(){
	switch (this.estado) {
		case 'CERRADO':
			return "[-]";
		case 'BANDERA':
			return "[^]";
		case 'INTERROGACION':
			return "[?]";
		case 'ABIERTO':
			if (this.numero == 0){
			   return " . ";
			}else{
			   return `[${this.numero}]`;                    
			}
	 }		
}

module.exports = Celda;
