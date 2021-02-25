const { Schema, model } = require('mongoose');

const messageSchema = new Schema(
    {
        email: {
            type: String,
          
        },
        userName: {
            type: String,
          
        },
        message: {
            type: String,
          
        },
        timeSend: {
            type: Date,
          
        },
    },
);

messageSchema.statics.addMessage = (message, callback) => {
    message.save(callback);
  };

module.exports = model("message",messageSchema);

