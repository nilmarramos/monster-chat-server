module.exports = (app) => {
  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;
  const mongoosePaginate = require('mongoose-paginate');
  const pass = require('../middleware/password');

  function configPass(v) {
    return pass.hash(v);
  }

  const UserSchema = new Schema(
    {
      email: {
        type: String,
        required: true,
        index: { unique: true },
        trim: true
      },
      password: {
        type: String,
        select: true,
        required: true,
        set: configPass
      },
      username: {
        type: String,
        required: true,
        index: { unique: true },
        trim: true
      },
      company: {
        type: Schema.Types.ObjectId,
        ref: 'Company'
      },
      token: { type: String }
    },
    {
      timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
    }
  );

  UserSchema.plugin(mongoosePaginate);

  return mongoose.model('User', UserSchema);
};
