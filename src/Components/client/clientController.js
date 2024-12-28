const clientService = require("./clientService.js")

const {
    createClientService
} = clientService

const createClient = async (req, res, next) => {
    console.log(req.body, "from client controller")

    try {
        const { email, location, talent, positions, jobtype, webaddress, payment, comment } = req.body

        if (!email || !location || !talent || !skill || !positions || !jobtype || !webaddress || !payment || !comment) {
            return res.status(400).json({
                success: false,
                message: "Please supply all the fields"
            })
        }

        await createClientService(req.body)
        res.status(201).json({
            success: true,
            message: "Client successfully created"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong while trying to create the client account"
        })
    }
}

module.exports = {
    createClient
}