const Talent = require('../../models/talentModel.js');
const { Types } = require("mongoose")

const createTalentService = async (data) => {
    const newTalent = await Talent.create(data)
    console.log(newTalent, "talent service")
    return newTalent
}

module.exports = {
    createTalentService
}