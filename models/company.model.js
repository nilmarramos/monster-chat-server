const mongoose = require('mongoose'),  
      Schema = mongoose.Schema;

const CompanySchema = new Schema({  
  companyId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  admin: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
},
{
  timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
});

module.exports = mongoose.model('Company', CompanySchema);  
