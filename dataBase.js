const mysql=require('mysql')
require('dotenv').config()

const mysqlConnection = mysql.createConnection({
host:process.env.HOST,
user:process.env.USER,
password:null,
database:process.env.DATABASE,
});

mysqlConnection.connect(function(err){
  if(err){
    console.log("No se pudo Connectar!");
   }
  else{
    console.log(" BD Conectada!")
  }
})

module.exports=mysqlConnection;