# Question 9

## Problem Statement
> **9. Connect a Node.js runtime environment to a MongoDB database instance using the Mongoose ODM.**

---

## Solution Overview
This solution provides a standalone, robust Node.js script that connects to a local MongoDB instance or a remote MongoDB Atlas cluster using the **Mongoose ODM** (Object Data Modeling) library.

### Key Features
1. **Asynchronous Connection**: Uses `async/await` with `mongoose.connect(MONGO_URI)` to establish a clean, non-blocking connection.
2. **Lifecycle Event Monitoring**:
   - `mongoose.connection.on('connected', ...)`: Emitted when connection succeeds.
   - `mongoose.connection.on('error', ...)`: Captures runtime connection errors.
   - `mongoose.connection.on('disconnected', ...)`: Notifies when database connectivity is severed.
3. **ODM Schema & Model**: Defines a sample `Student` schema and model to demonstrate ODM entity mapping.

---

## How to Run

### 1. Install Dependencies
```bash
# Navigate to the Q9 directory
cd Mock_Practical_Solutions/Q9

# Install mongoose
npm install
```

### 2. Configure Connection URI (Optional)
By default, the script connects to a local MongoDB instance:
```
mongodb://127.0.0.1:27017/student_db
```
To connect to an Atlas cluster, specify the `MONGO_URI` environment variable:
```bash
# PowerShell
$env:MONGO_URI="mongodb+srv://<username>:<password>@cluster0.mongodb.net/student_db"
node index.js

# Bash
MONGO_URI="mongodb+srv://<username>:<password>@cluster0.mongodb.net/student_db" node index.js
```

### 3. Run the Script
```bash
node index.js
# Or
npm start
```

---

### File Structure
- `index.js`: Main connection script featuring event listeners and schema definition.
- `package.json`: Project manifest declaring `mongoose` dependency.
- `README.md`: Step-by-step setup and execution guide.
