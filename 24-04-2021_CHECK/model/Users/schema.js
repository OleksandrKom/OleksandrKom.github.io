const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: Schema.Types.String,
    required: true,
    maxLength: 250,
  },
  surname: {
    type: String,
    maxLength: 250,
  },
  birth: Date,
  exp: Number,
  role: {
    type: String,
    enum: [
      'worker',
      'engineer',
      'welder',
      'chief engineer',
      'fitter',
      'security',
      'accountant',
      'economist',
    ],
  },
  salary: Number,
  stage: Number, //смена
  childs: [{
    name: {
      type: String,
      maxLength: 250,
    },
    age: Number,
  }],
  transportation: Boolean,
}, {timestamps: true });