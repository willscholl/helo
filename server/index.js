require('dotenv').config();
const express = require('express'),
      massive = require('massive'),
      ctrl = require('./controller'),
      bodyParser = require('body-parser')

const app = express(),
      { CONNECTION_STRING, SERVER_PORT } = process.env

app.use(bodyParser.json());

massive(CONNECTION_STRING).then((db) => {
  app.set('db', db)
  console.log('Connected to db')
  app.listen( SERVER_PORT, () => console.log(`bang on port ${SERVER_PORT}`))
})

app.post('/auth/register', ctrl.register);
app.post('/auth/login', ctrl.login);

app.get('/api/post/:id', ctrl.getPost)