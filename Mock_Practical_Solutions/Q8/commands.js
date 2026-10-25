// ==========================================
// MongoDB Shell Native CRUD Operations
// Student: Shivam Pimple (shivampimple29@student.sfit.ac.in)
// ==========================================

// 1. Switch / Create Database
use student_db;

// ------------------------------------------
// 2. CREATE (Insert Operations)
// ------------------------------------------

// Insert a single document
db.users.insertOne({
  name: "Ashish Waghmare",
  email: "ashish@example.com",
  role: "DevOps Engineer",
  semester: 5,
  isActive: true,
  createdAt: new Date()
});

// Insert multiple documents
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

// ------------------------------------------
// 3. READ (Query Operations)
// ------------------------------------------

// Read all documents in the collection
db.users.find();

// Read all documents formatted cleanly
db.users.find().pretty();

// Read a single document by specific filter
db.users.findOne({ name: "Shivam Pimple" });

// Query with condition
db.users.find({ isActive: true });

// Query with projection (return only name, email, and role, omit _id)
db.users.find({}, { name: 1, email: 1, role: 1, _id: 0 });

// ------------------------------------------
// 4. UPDATE (Modification Operations)
// ------------------------------------------

// Update a single document using the $set operator
db.users.updateOne(
  { name: "Shivam Pimple" },
  {
    $set: {
      role: "Lead Full-Stack Developer",
      semester: 6
    }
  }
);

// Update multiple documents
db.users.updateMany(
  { semester: 5 },
  {
    $set: {
      department: "Information Technology"
    }
  }
);

// ------------------------------------------
// 5. DELETE (Removal Operations)
// ------------------------------------------

// Delete a single document matching a condition
db.users.deleteOne({ name: "Ashish Waghmare" });

// ------------------------------------------
// 6. VERIFICATION COMMANDS
// ------------------------------------------
show dbs;
show collections;
db.users.countDocuments();
db.users.find().pretty();
