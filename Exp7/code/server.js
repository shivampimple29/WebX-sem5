// Step 1: Import the core Node.js modules
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// Step 2: Create the HTTP server
const server = http.createServer((req, res) => {
    
    // Log the request to a local file (Asynchronous File Appending)
    const logMessage = `[${new Date().toISOString()}] Request received for: ${req.url}\n`;
    fs.appendFile('server.log', logMessage, (err) => {
        if (err) console.error('Failed to write to log file:', err);
    });

    // Step 3: Handle routes and serve the HTML file
    if (req.url === '/' || req.url === '/index.html') {
        
        // Read the index.html file asynchronously
        fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
            if (err) {
                // Handle file system error (e.g., file missing)
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 Internal Server Error: Missing HTML source.');
                return;
            }
            
            // Send successful response with HTML content
            res.writeHead(200, { 'Content-Type': 'text/html' }); // Tells browser it is HTML
            res.end(data);
        });
        
    } else {
        // Fallback for any other page routes
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Page Not Found');
    }
});

// Step 4: Start listening on the designated port
server.listen(PORT, () => {
    console.log(`Server is actively running at http://localhost:${PORT}/`);
});