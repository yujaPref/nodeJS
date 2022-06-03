// import express from 'express'; //③번 단계에서 다운받았던 express 모듈을 가져온다.
// import mongoose from 'mongoose';
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { User } = require("./models/User");

const app = express(); //가져온 express 모듈의 function을 이용해서 새로운 express 앱을 만든다. 🔥
const port = 5000; //포트는 4000번 해도되고, 5000번 해도 된다. -> 이번엔 5000번 포트를 백 서버로 두겠다.

app.use(bodyParser.urlencoded({extended: true})) //옵션을 주기 위해 app.use 를 이용해 인코드.... extended 트루로 해주고
//application/json
app.use(bodyParser.json());

mongoose.connect(
  'mongodb+srv://test1234:efeLSSmJqP3l09Wf@clustertest.5ctajcc.mongodb.net/?retryWrites=true&w=majority'
).then(() => console.log('MongoDB Connected...')) //🔥 연결이 잘 됐는지 확인하기
.catch(err => console.log(err)); //🔥 연결이 잘 안 된건지 확인하기


app.get('/', (req, res) => { //express 앱(app)을 넣고, root directory에 오면, 
  res.send('Hello World! node 실행') //"Hello World!" 를 출력되게 해준다.
});


app.post("/register", (req, res) => {
  //여기서 작성해줘야 할 코드는 ..
  //client에서 보내주는 username, email, password 등 회원가입때 필요한 정보들을 client에서 가져오면,
  //이것들(정보들)을 데이터 베이스에 넣어주는 것을 작업을 야기서 해주는거다! ✨
  //(위 작업을 해주기 위해, 내가 방금전에 만들어줬던 usermodel을 가져와야한다. <-- models 폴더안에 들어있는 User.js)

  //가져온 User 를 이용해서 인스턴스를 만들어준다.
  const user = new User(req.body); //정보들을 database에 넣어주기 위해서는 request의 body를 넣어준다.

  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err });
    return res.status(200).json({
      //성공했다면 client에게 성공했다는 200과, 성공했다는 것을 json 형식으로 전달
      success: true,
    });
  });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}); //포트 5000번에서 이 앱을 실행한다.



