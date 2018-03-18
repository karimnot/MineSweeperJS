


function Celda(){

	this.estado = 'CERRADO';
	this.mina = false;
	this.numero = 0;

	this.marcarCelda = function(){
		switch (this.estado) {
			case 'CERRADO':
				this.setEstado('BANDERA');
				break;
			case 'BANDERA':
				this.setEstado('INTERROGACION');
				break;
			case 'INTERROGACION':
				this.setEstado('CERRADO');
				break;
		}
	}

	this.abrirCelda = function(){
		if (this.estado === 'CERRADO'){
			this.estado = 'ABIERTO';
		}
	}

	this.colocarMina = function(){
		this.mina = true;
	}

	this.isMina = function(){
		return this.mina;
	}

	this.imprimir = function(){
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

};




function Buscaminas(x, y, minas){

	this.dimX = x;
	this.dimY = y;
	this.minas = minas;
	this.status = 'INICIADO';
	this.tablero = new Array(x);

	for (var i = 0; i < x; i++) {
		this.tablero[i] = new Array(y);
	}	

	for (var i = 0; i < x; i++) {
		for (var j = 0; j < y; j++) {
		    this.tablero[i][j] = new Celda();
		}
	}
	
	this.celdaValida = function(x, y){
		return ( (x >= 0)&&(x < this.dimX) ) && ( (y >= 0)&&(y < this.dimY) );
	}	
	
	
	this.abrirCelda = function(x, y){
		if (this.celdaValida(x, y)){
			if (this.tablero[x][y].isMina()){
			    this.status = 'PERDIDO';
			}else if (this.tablero[x][y].estado == 'CERRADO'){
			    this.tablero[x][y].numero = this.obtenerNumero(x, y);
			    this.tablero[x][y].abrirCelda();
			    if ( this.tablero[x][y].numero == 0){
				   for (var i = x-1; i <= x+1; i++) {
					  for (var j = y-1; j <= y+1; j++) {
						 this.abrirCelda(i, j);
					  }
				   }                    
			    }
			}
		 }
	}

	this.obtenerNumero = function(x, y){
		var contador = 0;
		for (var i = x-1; i <= x+1; i++) {
		    for (var j = y-1; j <= y+1; j++) {
			   if (this.celdaValida(i,j) && (this.tablero[i][j].isMina())){
				  contador++;
			   }
		    }
		}
		return contador;
	}

	this.marcarCelda = function(x, y){
		this.tablero[x][y].marcarCelda();
	}

	this.colocarMina = function(){
		var contador = this.minas;
		while (contador > 0){
		     var xx = Math.floor( Math.random() * this.dimX );
		     var yy = Math.floor( Math.random() * this.dimY );
			if (!this.tablero[xx][yy].isMina()){
				console.log(`Mina no. ${contador} en: [${xx}][${yy}]`);
		    		this.tablero[xx][yy].colocarMina();
		    		contador--;
			}
		}
	}

	// Incialization block

	this.colocarMina();

}
