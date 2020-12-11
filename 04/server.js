const express = require('express')
const app = express()
const { urlencoded, json } = require('body-parser')
const routes = require('./routes')

app.use(urlencoded({ extended: true }))

app.use(json())

// set routes
app.use('/api', routes)

const server = app.listen(process.env.SERVER_PORT, () => {
  const port = server.address().port
  console.log("app listening at ", port);
});