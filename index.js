var express = require('express');
var app = express();
var compress = require('compression');

if (process.argv.length > 2) {
	app.use("/", express.static(process.argv[2]));
	app.use(compress({
	  threshold: 100
	}));

	var port = process.env.PORT || 8080;
	app.listen(port, function(){
		console.log("Listening... on ", port);
	});
} else {
	console.log("Please specify the static directory to serve.");
}