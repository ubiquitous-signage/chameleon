'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  HAMSTER: '"http://localhost:9000"',
  API_ENDPOINT: '"http://localhost:9000/api"'
})
