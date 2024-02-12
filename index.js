const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoute');
const session = require("express-session");

const app = express();
const port = 3000;



app.use(session({
     secret :"node-session",
     resave:false,
     saveUninitialized:true
}))
/*
   option 
   
   - secret : 필수, 세션 암호화에 사용
   - resave : 세션이 변경되지 않아도 저장이 됨, false 권장
   - saveUninitialized : 세션 초기화시 미리 만들지를 설정
*/

app.use(bodyParser.json());

app.use(userRoute);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
