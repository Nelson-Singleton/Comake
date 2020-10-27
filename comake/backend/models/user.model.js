const mongoose = require('mongoose')
//const Joi = require('joi')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxlength: 25
    }
    // ,
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     trim: true,
    //     maxlength: 255       
    // },
    // password: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     trim: true,
    //     minlength: 4,
    //     maxlength: 255
    // }
})

// const userSchema = new Schema({
//     username: { //validations
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//       minlength: 3
//     },
//   }, {
//     timestamps: true,
//   });

// function validateUser(user) {
//     const schema = {
//         name: Joi.string().min(5).max(50).required(),
//         email: Joi.string().min(5).max(255).required().email(),
//         password: Joi.string().min(5).max(255).required()
//     };
//     return Joi.validate(user, schema);
// }

const User = mongoose.model('User', userSchema)

module.exports = User;
// module.exports = validateUser;