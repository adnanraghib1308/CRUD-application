const express = require('express')
const router = express.Router()
const User = require("../models/user.js")

router.get('/:id', async (req, res) => {
	await User.findByIdAndRemove(req.params.id, (err, doc) => {
		if(!err){
			res.redirect('/user/list')
		}
		else{
			res.send('Error ' + err)
		}
	})
})

module.exports = router