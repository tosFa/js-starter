var express = require('express');
var path = require('path');
var compression = require('compression');

var PORT = 3001;
var app = express();

app.use(compression());

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, '..', '..', 'build')));
// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'build', '/index.html'));
});

app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
});
