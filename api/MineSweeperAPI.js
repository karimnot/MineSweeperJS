const MineSweeper = require('../controller/MineSweeper');
const session = require('express-session');
const ModelFactory = require('../models/ModelFactory');
 

module.exports = app => {

	app.use(session({ secret: 'this-is-a-secret-token', cookie: { maxAge: 60000 }}));

	app.route('/api/new')
		.get((req, res) => {
			res.json({status: 'OK - GET'});
		})
		.post((req, res) => {			
			console.log(req.body);
			let buscaminas = new MineSweeper(req.body.x, req.body.y, req.body.mines);
			buscaminas.imprimir();

			var sessData = req.session;
			sessData.buscaminas = buscaminas;

			var game = new ModelFactory(connection);
			game.newGame(buscaminas);

			res.json({game: buscaminas});			
		});	
		
	app.route('/api/open')
		.post((req, res) => {

			var buscaminas = req.session.buscaminas;
						
			console.log(buscaminas.dimX);
			console.log(buscaminas.tablero[0][0]);
			
			
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