

module.exports = app => {
	
	app.route('/api')
		.get((req, res) => {
			res.json({status: 'OK'});
		})
		.post((req, res) => {

		});

	app.route('/api2')
		.get((req, res) => {
			res.json({status: 'OK'});
		})
		.post((req, res) => {

		});		
}