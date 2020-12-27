const express = require('express')
const router = express.Router()
const User = require("../models/user.js")

router.get('/', (req, res) => {
	res.render('addUser', {
		viewTitle: "Create New User"
	})
})

router.post('/', (req, res) =>{
	if(req.body._id == ''){
		addNewUser(req, res)
	}
	else{
		updateUser(req, res)
	}
})

async function addNewUser(req, res){
	try{
		const user = new User({
			name: req.body.name,
			type: req.body.type,
			institution: req.body.institution
		})
		const savedUser = await user.save()
		res.redirect('/user/list')
	}
	catch(err){
		res.json({msg:"Error has occured "+err})
	}
}

async function updateUser(req, res){
	await User.findOneAndUpdate({_id: req.body._id}, req.body, {new: true}, (err, doc)=>{
		if(!err){
			res.redirect('user/list')
		}
		else{
			res.send('Error '+err)
		}
	})
}

module.exports = router