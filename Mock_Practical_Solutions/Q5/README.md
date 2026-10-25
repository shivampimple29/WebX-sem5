# Question 5

## Problem Statement
> **5. Build a simple HTTP web server from scratch using the native Node.js http module. Configure the server to listen on port 3000 and return a custom HTML welcome message for the root route.**

---

## Solution Overview
This solution implements an HTTP web server from scratch using the core Node.js `http` and `fs` modules with zero external npm dependencies.

### Features
- **Server Creation**: Uses `http.createServer((req, res) => { ... })` to handle incoming requests.
- **Port Configuration**: Listens on port `3000`.
- **Root Route Handling**: Serves a clean, responsive HTML welcome message (styled with Tailwind CSS) when `/` is accessed with HTTP `200 OK` and `'Content-Type': 'text/html'`.
- **Fallback**: Returns `404 Not Found` for undefined endpoints.

### How to Run
```bash
# Navigate to the Q5 directory
cd Mock_Practical_Solutions/Q5

# Start the server
node server.js
# Or
npm start
```
Open your browser and navigate to:
```
http://localhost:3000/
```

### File Structure
- `server.js`: Native Node.js HTTP server.
- `index.html`: Responsive HTML welcome template styled with Tailwind CSS.
- `package.json`: Project manifest with start script.
