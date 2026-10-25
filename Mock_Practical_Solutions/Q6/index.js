const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'log.txt');

// Step 1: Create and write initial timestamp message to log.txt
const timestamp = new Date().toISOString();
const initialContent = `[${timestamp}] Log initialized by Shivam Pimple (shivampimple29@student.sfit.ac.in)\n`;

console.log("1. Writing initial timestamp message to log.txt...");
fs.writeFile(filePath, initialContent, 'utf8', (err) => {
  if (err) {
    console.error("Error creating/writing file:", err);
    return;
  }
  console.log("-> File created and initial timestamp written successfully.\n");

  // Step 2: Read the file contents back and display them in the console
  console.log("2. Reading contents from log.txt:");
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    console.log("--- File Content ---");
    process.stdout.write(data);
    console.log("--------------------\n");

    // Step 3: Append a follow-up line to the file
    const appendTimestamp = new Date().toISOString();
    const followUpContent = `[${appendTimestamp}] Follow-up: Asynchronous operation completed successfully.\n`;

    console.log("3. Appending follow-up line to log.txt...");
    fs.appendFile(filePath, followUpContent, 'utf8', (err) => {
      if (err) {
        console.error("Error appending to file:", err);
        return;
      }
      console.log("-> Follow-up line appended successfully.\n");

      // Verify final content
      fs.readFile(filePath, 'utf8', (err, finalData) => {
        if (!err) {
          console.log("4. Final content of log.txt:");
          console.log("--- Updated File Content ---");
          process.stdout.write(finalData);
          console.log("----------------------------");
        }
      });
    });
  });
});
