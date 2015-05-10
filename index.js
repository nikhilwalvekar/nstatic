var express = require('express');
var app = express();
var compress = require('compression');

app.use("/", express.static(__dirname + '/public'));
app.use(compress({
  threshold: 100
}));

var port = process.env.PORT || 8080;
app.listen(port, function(){
	console.log("Listening... on ", port);
});