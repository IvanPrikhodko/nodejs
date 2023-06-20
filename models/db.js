const mongoose = require('mongoose');

// Define the Contact schema
const contactSchema = new mongoose.Schema({
  contactName: String,
  contactNumber: String,
  emailAddress: String
});

// Create the Contact model
const Contact = mongoose.model('Contact', contactSchema);

const uri = "mongodb+srv://ivan:ivanpassword@comp229cluster.5wsntz4.mongodb.net/?retryWrites=true&w=majority";
const timeout = 5000;

async function connect() {
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}


module.exports = { connect };
