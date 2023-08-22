const http = require('http');

const requestListener = function (req, res) {
  res.end('Hello Holberton School!');
};

const app = http.createServer(requestListener);

app.listen(1245, 'localhost', () => {
  console.log('Server is listening');
});

module.exports = app;
