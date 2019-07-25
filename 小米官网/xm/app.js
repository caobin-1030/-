const express=require('express');
const bodyParser=require('body-parser');
//const user=require('./routes/user.js');
const ex=require('./routes/ex.js');
var app=express();
app.use(bodyParser.urlencoded({
	extended:false
}));
app.use(express.static('public'));
//app.use('/user',user);
app.use('/ex',ex);
app.listen(8080);
