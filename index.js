const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello, World!');
})

app.get('/info', (req, res) =>{
  res.send('Site info here');
})

app.get('/contact', (req, res) =>{
  res.send('Contact Us');
})

app.get('/about', (req, res) =>{
  res.send('About Us');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})