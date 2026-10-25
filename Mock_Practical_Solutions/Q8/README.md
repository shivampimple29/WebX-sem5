# Question 8

## Problem Statement
> **8. Install MongoDB locally or set up an Atlas cluster. Execute native database shell commands to perform basic CRUD operations.**

---

## Solution Overview
This guide provides the complete, sequential native MongoDB Shell (`mongosh`) commands to perform basic CRUD (Create, Read, Update, Delete) operations against a local MongoDB instance or MongoDB Atlas cluster.

---

## Step 0: Connect to MongoDB Shell

### Local MongoDB:
```bash
mongosh
```

### MongoDB Atlas Cluster:
```bash
mongosh "mongodb+srv://<username>:<password>@cluster0.mongodb.net/student_db"
```

---

## Step 1: Switch / Create Database
```javascript
use student_db
```
*Expected Output:*
```text
switched to db student_db
```

---

## Step 2: CREATE Operations (Insert)

### 1. Insert a Single Document (`insertOne`)
```javascript
db.users.insertOne({
  name: "Ashish Waghmare",
  email: "ashish@example.com",
  role: "DevOps Engineer",
  semester: 5,
  isActive: true,
  createdAt: new Date()
});
```
*Expected Output:*
```json
{
  "acknowledged": true,
  "insertedId": ObjectId("671b56a1e4b0123456789abc")
}
```

### 2. Insert Multiple Documents (`insertMany`)
```javascript
db.users.insertMany([
  {
    name: "Shivam Pimple",
    email: "shivampimple29@student.sfit.ac.in",
    role: "Full-Stack Developer",
    semester: 5,
    skills: ["React", "Node.js", "MongoDB", "Python"],
    isActive: true,
    createdAt: new Date()
  },
  {
    name: "Radha Ursekar",
    email: "radha@example.com",
    role: "Frontend Developer",
    semester: 5,
    skills: ["HTML", "CSS", "JavaScript", "Angular"],
    isActive: true,
    createdAt: new Date()
  }
]);
```
*Expected Output:*
```json
{
  "acknowledged": true,
  "insertedIds": {
    "0": ObjectId("671b56a1e4b0123456789abd"),
    "1": ObjectId("671b56a1e4b0123456789abe")
  }
}
```

---

## Step 3: READ Operations (Query)

### 1. Retrieve All Documents
```javascript
db.users.find().pretty();
```

### 2. Find Document by Filter
```javascript
db.users.findOne({ name: "Shivam Pimple" });
```

### 3. Query with Condition
```javascript
db.users.find({ isActive: true });
```

### 4. Query with Projection (Select Specific Fields)
```javascript
db.users.find({}, { name: 1, email: 1, role: 1, _id: 0 });
```

---

## Step 4: UPDATE Operations (Modify)

### 1. Update a Single Document (`updateOne`)
```javascript
db.users.updateOne(
  { name: "Shivam Pimple" },
  {
    $set: {
      role: "Lead Full-Stack Developer",
      semester: 6
    }
  }
);
```
*Expected Output:*
```json
{
  "acknowledged": true,
  "insertedId": null,
  "matchedCount": 1,
  "modifiedCount": 1,
  "upsertedCount": 0
}
```

### 2. Update Multiple Documents (`updateMany`)
```javascript
db.users.updateMany(
  { semester: 5 },
  {
    $set: {
      department: "Information Technology"
    }
  }
);
```

---

## Step 5: DELETE Operations (Remove)

### Delete a Single Document (`deleteOne`)
```javascript
db.users.deleteOne({ name: "Ashish Waghmare" });
```
*Expected Output:*
```json
{
  "acknowledged": true,
  "deletedCount": 1
}
```

---

## Step 6: Verification Commands
```javascript
// Display database list
show dbs

// Display collections in current database
show collections

// Count remaining documents
db.users.countDocuments()

// View remaining documents
db.users.find().pretty()
```

---

## File Structure
- `commands.js`: Executable MongoDB Shell script (`mongosh < commands.js`).
- `commands.txt`: Plain text commands for quick terminal execution.
- `README.md`: Step-by-step documentation with commands and expected outputs.
