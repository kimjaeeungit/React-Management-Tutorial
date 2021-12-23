//db환경설정 정보 읽어와야돼서 fs라는 file에 접근할 수 있는 라이브러리

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

const fs = require('fs');
const data = fs.readFileSync('./database.json');//동기식으로 관리할 데이터베이스 json 파일 경로 설정
const conf = JSON.parse(data); //해당 환경설정 데이터 파싱해서 가져오기
const mysql = require('mysql');//oracle라이브러리 불러오기


const connection = mysql.createConnection({
    host : conf.host,
    user : conf.user,
    password : conf.password,
    port : conf.port,
    database : conf.database
});
connection.connect();

//client가 /api/customers에 접속을 하게되면 client에게 데이터를 반환할 수 있도록 하기
///api/customers에 접속하면  json 형태로 데이터 반환
app.get('/api/customers',(req,res) =>{
    connection.query(
        "SELECT * FROM CUSTOMER",
        (err,rows,fields) =>{
            res.send(rows);
        }
     );
  });


app.listen(port, () => console.log(`Listening on port ${port}`));