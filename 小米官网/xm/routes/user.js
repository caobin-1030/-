const express=require('express');
const bodyParser=require('body-Parser');
const pool=require('../pool.js');
var router=express.Router();

router.get('/login/:phone-:upwd',(req,res)=>{
	var $phone=req.params.phone;
	var $upwd=req.params.upwd;
	console.log('aaaaaaa');
	var sql='select * from user where phone=? and upwd=?';
	pool.query(sql,[$phone,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.lenght){
			res.send('1');
		}else{
			res.send('0');
		}
	});
});

router.post('/v1/reg/:phone-:upwd',(req,res)=>{
	var $phone=req.params.phone;
	var $upwd=req.params.upwd;
	console.log($phone);
	var sql='insert into user values(null,?,?)';
	pool.query(sql,[$phone,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send('1');
		}else{
			res.send('0');
		}
	});
});
module.exports=router;











