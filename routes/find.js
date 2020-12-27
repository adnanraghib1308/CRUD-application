const express = require('express')
const router = express.Router()
const User = require("../models/user.js")

router.get('/:id', async (req, res) => {
	await User.findById(req.params.id, (err, doc) => {
		if(!err){
			res.render('addUser', {
				viewTitle: "Update User",
				user: doc
			})
		}
		else{
			res.send("No such user found")
		}
	}).lean()
})

module.exports = router