// import express from 'express'; //③번 단계에서 다운받았던 express 모듈을 가져온다.
// import mongoose from 'mongoose';
const express = require('express');
const mongoose = require('mongoose');

const app = express() //가져온 express 모듈의 function을 이용해서 새로운 express 앱을 만든다. 🔥
const port = 5000 //포트는 4000번 해도되고, 5000번 해도 된다. -> 이번엔 5000번 포트를 백 서버로 두겠다.

const Schema = mongoose.Schema;
const productSchema = mongoose.Schema({
  writer: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  title: {
    type: String,
    maxlength: 50
  },
  description: {
    type: String
  }
}, { timestamps: true }); 


const Product = mongoose.model('Product', productSchema);

mongoose.connect(
  'mongodb+srv://test1234:efeLSSmJqP3l09Wf@clustertest.5ctajcc.mongodb.net/?retryWrites=true&w=majority'
).then(() => console.log('MongoDB Connected...')) //🔥 연결이 잘 됐는지 확인하기
.catch(err => console.log(err)); //🔥 연결이 잘 안 된건지 확인하기

module.exports = { Product };

app.get('/', (req, res) => { //express 앱(app)을 넣고, root directory에 오면, 
  res.send('Hello World! node 실행') //"Hello World!" 를 출력되게 해준다.
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) //포트 5000번에서 이 앱을 실행한다.



