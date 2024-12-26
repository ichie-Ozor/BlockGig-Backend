const express = require("express")
const clientController = require('./clientController.js')

const { createClient } = clientController

const clientRouter = express.Router()

clientRouter.route('/').post(createClient)

module.exports = clientRouter;