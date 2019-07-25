const express=require('express');
const bodyParser=require('body-Parser');
const pool=require('../pool.js');
var router=express.Router();

router.post('/v1/register',(req,res)=>{
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	pool.query('insert into xm_user values(null,?,?)',[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send('1');
		}else{
			res.send('0');
		}
	});

});
router.post("/v1/login/:uname-:upwd",(req,res)=>{
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	pool.query('select * from xm_user where uname=? and upwd=?',[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length){
			res.send('1');
		}else{
			res.send('0');
		}
	});
});
module.exports=router;











