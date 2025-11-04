const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200);
    res.end('Hello from Node!');
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  server.listen(port, () => console.log('Server running on', port));
}

module.exports = server;
