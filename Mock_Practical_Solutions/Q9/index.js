const mongoose = require('mongoose');

// MongoDB Connection URI (Local MongoDB)
const MONGO_URI = 'mongodb://127.0.0.1:27017/student_db';

// Function to connect to MongoDB
async function connectDB() {
  try {
    console.log(`Connecting to MongoDB at: ${MONGO_URI}...`);
    await mongoose.connect(MONGO_URI);

    // Define a basic Schema and Model to demonstrate ODM integration
    const studentSchema = new mongoose.Schema({
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      role: { type: String, default: 'Student Developer' },
      createdAt: { type: Date, default: Date.now }
    });

    const Student = mongoose.model('Student', studentSchema);

    console.log('-> Schema and Model registered successfully with Mongoose ODM.');
    console.log('-> Demonstrated for: Shivam Pimple (shivampimple29@student.sfit.ac.in)');

  } catch (error) {
    console.error('-> Failed to connect to MongoDB instance:', error.message);
  }
}

// Execute connection
connectDB();
