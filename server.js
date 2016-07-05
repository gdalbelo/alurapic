var http = require('http');
var app = require('./config/express');
require('./config/database')('mongodb://gdalbelo:gaBelo1609@ds023654.mlab.com:23654/alurapic');

http.createServer(app)
.listen(process.env.port || 3000, function() {
	console.log('Servidor iniciado');
});
