const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://admin:Af190901@cluster0.d7sl6.mongodb.net/node-api?retryWrites=true&w=majority',
  {useNewUrlParser:true, useUnifiedTopology:true},
  (err) => {
    if (!err) {
      console.log("Mongodb connected")
    } else {
      console.log("Connection error : " + err)
    }
  }
)