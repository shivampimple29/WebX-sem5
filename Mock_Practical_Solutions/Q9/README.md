# Question 9

## Problem Statement
> **9. Connect a Node.js runtime environment to a MongoDB database instance using the Mongoose ODM.**

---

## Solution Overview
This solution connects a Node.js runtime environment to a local MongoDB database instance (viewable via MongoDB Compass) using the **Mongoose ODM** (Object Data Modeling) library.

The script connects to the local MongoDB server at:
```
mongodb://127.0.0.1:27017/student_db
```
It defines a sample `Student` schema and model to demonstrate ODM integration and logs the connection confirmation to the console.

---

## Step-by-Step Setup & Execution

### 1. Initialize the Node.js Project
In the `Q9` directory, initialize a new Node.js project to generate `package.json`:
```bash
npm init -y
```

### 2. Install Mongoose
Install the Mongoose ODM package. This will add `mongoose` to your dependencies and generate `package-lock.json`:
```bash
npm i mongoose
```

### 3. Configure the Start Script
Open `package.json` and replace the default `"test"` script with the `"start"` script:
```json
"scripts": {
  "start": "node index.js"
}
```
This allows the project to be executed directly using `npm start`.

### 4. Ensure Local MongoDB is Running
Make sure your local MongoDB service is running (or opened in **MongoDB Compass**) on:
```
mongodb://127.0.0.1:27017
```

### 5. Run the Script
Execute the script using:
```bash
npm start
```
*(Or directly via `node index.js`)*

---

## Expected Output
```text
Connecting to MongoDB at: mongodb://127.0.0.1:27017/student_db...
-> Schema and Model registered successfully with Mongoose ODM.
-> Demonstrated for: Shivam Pimple (shivampimple29@student.sfit.ac.in)
```

---

## File Structure
- `index.js`: Connection script using Mongoose to connect to localhost MongoDB.
- `package.json`: Project manifest configured with the `"start"` script and `mongoose` dependency.
- `README.md`: Step-by-step setup and execution instructions.
