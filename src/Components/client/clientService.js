const Client = require("../../models/clientModel.js")
const { Types } = require("mongoose");

const createClientService = async (data) => {
    const newClient = await Client.create(data)
    return newClient
}

module.exports = {
    createClientService
}