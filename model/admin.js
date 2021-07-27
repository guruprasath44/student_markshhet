const mongoose = require('mongoose');
const AdminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    gender: {
        type: String,
        required: true,
    }
    
  },
);
module.exports = mongoose.model('admin', AdminSchema);
