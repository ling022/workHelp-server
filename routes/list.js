const express=require('express')
const router=express.Router()
const pool=require('../db/db')
router.get('/jobs',async(req,res)=>{
    try{
        const [rows]=await pool.query('SELECT * from jobs')
        res.json({code:'1000',msg:'获取成功',data:rows})
    }catch(err){
        res.json({code:'5000',msg:'服务器错误',data:null})
    }
})
router.get('/jobs/:id',async(req,res)=>{
    try{
        const {id}=req.params
        console.log(id)
        const [rows]=await pool.query('SELECT * from jobs WHERE id=?',[id])
        if (rows.length === 0) {
            return res.json({ code: '4004', msg: '岗位不存在', data: null })
        }
        res.json({code:'1000',msg:'获取成功',data:rows[0]})
    }catch(err){
        console.log(err)
        res.json({code:'5000',msg:'服务器错误',data:null})
    }
})
module.exports=router