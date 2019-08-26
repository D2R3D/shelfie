require("dotenv").config();
const express= require('express')
const massive = require('massive')
const ctrl= require('./controller')

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

const app= express()
app.use(express.json())


app.get('/api/inventory', ctrl.getInventory)
app.post('/api/inventory', ctrl.addItem)

app.listen(4000, () => {
    console.log('Server is running yo')
})