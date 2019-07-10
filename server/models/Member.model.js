const mongoose = require('mongoose')
const Schema = mongoose.Schema


const memberSchema = new Schema({

  age: Number,
  teamId: String,
  image: String,
  name: String,
  bio: String

}, {
    timestamps: true
  })

const Member = mongoose.model('Member', memberSchema)
module.exports = Member
