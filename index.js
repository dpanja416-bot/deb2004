const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World from CSE-DS-23-006 Docker!')
})

app.listen(4000, ()=>{
    console.log("Started server");
}
)