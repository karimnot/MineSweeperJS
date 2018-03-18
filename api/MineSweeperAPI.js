const MineSweeper = require('../controller/MineSweeper');


module.exports = app => {

	let buscaminas;

	app.route('/api/new')
		.get((req, res) => {
			res.json({status: 'OK - GET'});
		})
		.post((req, res) => {
			console.log(req.body);
			buscaminas = new MineSweeper(req.body.x, req.body.y, req.body.mines);
			buscaminas.imprimir();
			res.json({game: buscaminas});			
		});	
		
	app.route('/api/open')
		.post((req, res) => {
			console.log(req.body);			
			buscaminas.abrirCelda(parseInt(req.body.x), parseInt(req.body.y));
			buscaminas.imprimir();			
			res.json({game: buscaminas});						
		});	

	app.route('/api/mark')
		.post((req, res) => {
			console.log(req.body);			
			buscaminas.marcarCelda(parseInt(req.body.x), parseInt(req.body.y));
			buscaminas.imprimir();			
			res.json({game: buscaminas});						
		});	

}