// requirements
var express = require('express'),
    app = express(),
    path = require('path');

// set the view engine to ejs
app.set('view engine', 'ejs');

// views path
var views = path.join(process.cwd(), "views");

// serve js & css files
app.use("/static", express.static("public"));
app.use("/vendor", express.static("node_modules"));

// index page 
app.get('/', function(req, res) {
    res.render('pages/main');
});

// start the server
var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);