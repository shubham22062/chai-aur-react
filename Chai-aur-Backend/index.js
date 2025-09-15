require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.get('/twitter', (req, res) => {
    res.send("chai aur react")
})

app.get('/github', (req, res) => {
   res.send("chai aur dev")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
