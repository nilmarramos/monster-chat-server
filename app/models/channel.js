module.exports = (app) => {
  const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

  const ChannelSchema = new Schema(
    {
      channelId: {
        type: Schema.Types.ObjectId,
        required: true
      },
      name: {
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
    }
  );

  return mongoose.model('Channel', ChannelSchema);
};
