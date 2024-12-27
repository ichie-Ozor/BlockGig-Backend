const talentService = require("./talentService.js")

const {
    createTalentService
} = talentService

const createTalent = async (req, res, next) => {
    console.log(req.body, "from talent controller", req.file)

    try {
        const { fullName, email, location, skill, experience, availability, industry, portfolio } = req.body

        if (!fullName || !email || !location || !skill || !experience || !availability || !industry || !portfolio || !req.file) {
            return res.status(400).json({
                success: false,
                message: "Please supply all the fields"
            })
        }
        let talent = {
            fullName,
            email,
            location,
            skill,
            experience,
            availability,
            industry,
            portfolio,
            file: req.file.path
        }
        await createTalentService(talent)
        res.status(200).json({
            success: true,
            message: "Talent saved successfully!"
        })
    } catch (error) {
        console.error("error creating talent", error)
        res.status(500).json({
            success: false,
            message: "Something went wrong while trying to create talent account"
        })
    }
}

module.exports = {
    createTalent
}