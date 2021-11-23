const mysql =  require('mysql')

function dbConnect(){
    const db = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        port:3307,
        password: '',
        database: 'test1'
    })
    
    db.connect()
    return db
}



module.exports={
    dbConnect,
}