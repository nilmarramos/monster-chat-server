module.exports = (app) => {
  const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

  const CompanySchema = new Schema(
    {
      name: {
        type: String,
        required: true
      },
      admin: {
        type: String,
        required: true
      }
    },
    {
      timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
    }
  );

  return mongoose.model('Company', CompanySchema);
};
