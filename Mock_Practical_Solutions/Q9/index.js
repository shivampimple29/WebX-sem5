const mongoose = require('mongoose');

// MongoDB Connection URI (Local MongoDB or Atlas Cluster)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/student_db';

// Connection Options
const options = {
  // Modern mongoose configurations are auto-handled in Mongoose v6+
};

// Connection Lifecycle Event Listeners
mongoose.connection.on('connected', () => {
  console.log('-> Mongoose connection established successfully.');
  console.log(`-> Connected to database: ${mongoose.connection.name}`);
});

mongoose.connection.on('error', (err) => {
  console.error('-> Mongoose connection error:', err.message);
});

mongoose.connection.on('disconnected', () => {
  console.log('-> Mongoose connection disconnected.');
});

// Function to connect to MongoDB
async function connectDB() {
  try {
    console.log(`Connecting to MongoDB at: ${MONGO_URI}...`);
    await mongoose.connect(MONGO_URI, options);

    // Define a basic Schema and Model to demonstrate ODM integration
    const studentSchema = new mongoose.Schema({
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      role: { type: String, default: 'Student Developer' },
      createdAt: { type: Date, default: Date.now }
    });

    const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);

    console.log('-> Schema and Model registered successfully with Mongoose ODM.');
    console.log('-> Demonstrated for: Shivam Pimple (shivampimple29@student.sfit.ac.in)');

  } catch (error) {
    console.error('-> Failed to connect to MongoDB instance:', error.message);
  }
}

// Execute connection
connectDB();
