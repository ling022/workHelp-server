const express=require('express')
const cors=require('cors')

const app=express()
const listRouter=require('./routes/list')
app.use(cors())
app.use(express.json())
app.use('/api',listRouter)

app.listen(3000,()=>{
    console.log('server running')
})