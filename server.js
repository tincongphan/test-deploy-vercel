const express = require('express')
const app = express()
app.get('/getdata', (req, res) => {
  res.send('check success 123')
})
const port = process.env.PORT || 1900
app.listen(port, () => {
  console.log(`app is listening port ${port}`);
})
