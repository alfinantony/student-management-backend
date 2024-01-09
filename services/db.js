// 1: Import mongoose
    const mongoose = require('mongoose');

// 2: Define connection string between mongoose and express
//    mongoose.connect=('mongodb://127.0.0.1:27017/student')
   
// 3: create a model and schema for sharing data mongodb and express
// const studentdetails = mongoose.model('studentdetails', {
//     name: String,
//     address: String,
//     email: String,
//     phone: Number,  // Use Number for representing a numeric field (assuming phone number is numeric)
//     district: String
// })


mongoose.connect('mongodb://127.0.0.1:27017/student', { useNewUrlParser: true, useUnifiedTopology: true });

// Define the schema for the 'studentdetails' collection
const studentDetailsSchema = new mongoose.Schema({
    name: String,
    address: String,
    email: String,
    phone: String,
    district: String
});

// Create a model based on the schema for the 'studentdetails' collection
const StudentDetails = mongoose.model('studentdetails', studentDetailsSchema);


//4: export the collection
module.exports = {
    studentdetails: StudentDetails
};