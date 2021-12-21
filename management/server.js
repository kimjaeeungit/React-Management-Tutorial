const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

//client가 /api/customers에 접속을 하게되면 client에게 데이터를 반환할 수 있도록 하기
///api/customers에 접속하면  json 형태로 데이터 반환
app.get('/api/customers',(req,res) =>{
    res.send([
        {
          'id' : 1,
          'image' : 'https://placeimg.com/64/64/1',
          'name' : '김재은',
          'birthday' : '970220',
          'gender' : '여자',
          'job' : '취준생'
        },
        {
          'id' : 2,
          'image' : 'https://placeimg.com/64/64/2',
          'name' : '김재영',
          'birthday' : '980901',
          'gender' : '여자',
          'job' : '직장인'
        },
        {
          'id' : 3,
          'image' : 'https://placeimg.com/64/64/3',
          'name' : '감영호',
          'birthday' : '630912',
          'gender' : '남자',
          'job' : '아빠'
        }
        ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));