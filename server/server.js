import express from 'express';
import mongoose from 'mongoose';

const app = express();


app.use('/', function (req, res) {
  return res.json('hello world')
})
// mongoose的Promise已经废弃了
import bluebird from 'bluebird';
mongoose.Promise = bluebird;

try {
  mongoose.connect('mongodb://localhost/shoukailiang', {
    // 不加参数会报警告
    // useMongoClient: true
  })
} catch (error) {
  console.log(error)
}
mongoose.connection
  .once('open', function () {
    console.log('mongoose connection')
  })
  .on('error', function (error) {
    throw error;
  })

app.listen(8888, () => {
  console.log("服务开启在8888");
})