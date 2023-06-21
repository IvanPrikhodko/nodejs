const mongoose = require('mongoose');

// Define the schema for the "contacts" collection
const contactSchema = new mongoose.Schema({
  // Define the fields and their types in your "contacts" collection
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
});

// Create a model from the schema
const Contact = mongoose.model('contacts', contactSchema);

// Export the Contact model
module.exports = Contact;