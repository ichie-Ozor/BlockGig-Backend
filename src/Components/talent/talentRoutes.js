const express = require("express")
const talentController = require("./talentController.js")
const upload = require("../../middleware/upload.js")

const { createTalent } = talentController

const talentRouter = express.Router()

talentRouter.route("/").post(upload.single("file"), createTalent)

module.exports = talentRouter;