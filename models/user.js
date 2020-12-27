const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
	name: String,
	type: String, 
	institution: String
})

module.exports = mongoose.model('Users', userSchema)