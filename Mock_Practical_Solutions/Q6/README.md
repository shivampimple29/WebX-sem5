# Question 6

## Problem Statement
> **6. Demonstrate file handling in Node.js using the asynchronous fs module. Write a script that creates a file named log.txt, writes a timestamp message to it, reads the file contents back to display them in the console, and appends a follow-up line.**

---

## Solution Overview
This script demonstrates asynchronous, non-blocking file operations in Node.js using the native `fs` module without external dependencies.

### Operations Demonstrated
1. **`fs.writeFile(file, data, callback)`**: Asynchronously creates `log.txt` (or overwrites if existing) and writes an initial timestamp entry.
2. **`fs.readFile(file, encoding, callback)`**: Asynchronously reads the content back and prints it to the console.
3. **`fs.appendFile(file, data, callback)`**: Asynchronously appends a second log entry with a new timestamp without overwriting the previous line.

### How to Run
```bash
# Navigate to the Q6 directory
cd Mock_Practical_Solutions/Q6

# Execute the script
node index.js
# Or
npm start
```

### File Structure
- `index.js`: Complete asynchronous file-handling script.
- `package.json`: Project manifest.
- `log.txt`: Generated dynamically when running the script.
