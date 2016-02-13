// requirements
var express = require('express'),
    app = express(),
    path = require('path');

// set the view engine to ejs
app.set('view engine', 'ejs');

app.set('port', (process.env.PORT || 5000));

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
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
