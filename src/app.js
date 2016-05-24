var pg = require('pg');
var username = process.argv[2];

var connectionString = "postgres://tiffany:postgres@localhost/tiffany"; 
pg.connect(connectionString, function (err, client, done) { 
	client.query('select * from hats where user_id = (select (id) from users where name = $1)', [username], function (err, result) {
		console.log(result.rows);

		done();
		pg.end(); // the client will idle for another 30 seconds, temporarily preventing the app from closing, unless this function is called
	});
});

//ALTERNATIVE
// var pg = require('pg');
// var username = process.argv[2];

// var connectionString = "postgres://tiffany:postgres@localhost/tiffany"; 
// pg.connect(connectionString, function (err, client, done) { 
// 	client.query('select $2 from hats where user_id = (select (id) from users where name = $1)', [username, 'hats'], function (err, result) {
// 		console.log(result.rows);

// 		done();
// 		pg.end(); // the client will idle for another 30 seconds, temporarily preventing the app from closing, unless this function is called
// 	});
// });
