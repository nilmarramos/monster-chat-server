const mongoose = require('mongoose'),  
      Schema = mongoose.Schema;

const MessageSchema = new Schema({  
  messageId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'

  },
  channel: {
    type: Schema.Types.ObjectId,
    ref: 'Channel'
  }
},
{
  timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
});

module.exports = mongoose.model('Message', MessageSchema);  
