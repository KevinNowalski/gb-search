const { loadNuxt, build } = require('nuxt')

const express = require('express')
const app = express();
const isDev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000

const cors = require('cors');
app.use(cors());
var corsOptions = {
  origin: port,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const axios = require('axios');
const { Op } = require("sequelize");
require('dotenv').config()
const api_key = process.env.API_KEY;
const models = require('./models/index.js')


app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

async function start() {
  // We get Nuxt instance
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

  // Render every route with Nuxt.js
  app.use(nuxt.render)

  // Build only in dev mode with hot-reloading
  if (isDev) {
    build(nuxt)
  }
  // Listen the server
  app.listen(port, '0.0.0.0')
  console.log('Server listening on `localhost:' + port + '`.')
}

start()