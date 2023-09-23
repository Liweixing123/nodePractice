const mysqli = require('mysql');

// 创建连接对象
const connection =  mysqli.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'lwx!1110036408',
        port: 3306,
        database: 'new_table'
    }
)

// 开始连接
connection.connect();

// 执行sql语句
const sql = 'select * from new_table'
connection.query(sql, function (err,result) {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
})

connection.end()