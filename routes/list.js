const express = require('express')
const router = express.Router()
const User = require("../models/user.js")

router.get('/', async (req, res) => {
	await User.find((err, docs) => {
		if(!err){
			res.render('listOfUser', {
				list: docs
			})
		}
		else{
			console.log('Error: ' + err)
			res.send(err)
		}
	}).lean()
})

module.exports = router