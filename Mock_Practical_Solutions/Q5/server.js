const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// Create HTTP Server
const server = http.createServer((req, res) => {
  // Handle root route
  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error: Could not read index.html');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else {
    // 404 Fallback
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

// Listen on Port 3000
server.listen(PORT, () => {
  console.log(`Server actively running at http://localhost:${PORT}/`);
});
