const express = require('express');
const mongoose = require('mongoose');
var exphbs  = require('express-handlebars');
const app = express();
require('dotenv/config');


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Routes
const indexRouter = require("./routes/index")
const userRouter = require("./routes/user")
const listRouter = require("./routes/list")
const findRouter = require("./routes/find")
const deleteRouter = require("./routes/delete")

//connecting to the database
mongoose.connect(
	process.env.DB_URL, 
	{ 
		useNewUrlParser: true, 
		useUnifiedTopology: true 
	}, 
	() => {
	console.log('connected to database')
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', indexRouter)
app.use('/user', userRouter)
app.use('/user/list', listRouter)
app.use('/user/find', findRouter)
app.use('/user/delete', deleteRouter)

app.listen(process.env.PORT || 3000, ()=>{
	console.log("server started");
})