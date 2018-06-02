const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const UserSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: 'Company'
  }
},
{
  timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
});

module.exports = mongoose.model('User', UserSchema);
