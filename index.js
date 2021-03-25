const express = require('express')
const app = express()
const port = 5000

const mongoose =require('mongoose')

mongoose.connect('mongodb+srv://user:1234<password>@cluster0.epyh9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true, useUnifiedTopology :true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('MongoDB Connected')).catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! First node lecture 0325')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})