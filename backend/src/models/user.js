const { Schema, model } = require('mongoose');



const userSchema = new Schema(
    {
        name: {
            type: String,
            
        },
        status: {
            type: String,
            default: 'online'
        },
    },
);

userSchema.statics.addUser = (user,callback) => {
   
    user.save(callback);
   
  };





module.exports = model("user",userSchema);