const mysql=require('mysql2')
const pool=mysql.createPool({
    host:'localhost',//本地开发就是 localhost，部署到服务器后改成服务器的 IP 或域名。
    user:'root',
    password:'3306',
    database:'workhelp',
    waitForConnections:true,//连接池里的链接都被占用时，即达到connectionLimit时，新的请求是等待还是报错，true表示等待
    connectionLimit:10,//最大连接数量，有10个请求同时查询，就开10个连接
    queueLimit:0//等待队列的长度限制。0 表示不限制排队数量，所有超出的请求都排队等待。如果设成5，就是最多5个请求排队，第6个直接报错。
})
//pool.promise让后续可以用 await 写异步查询
module.exports=pool.promise()