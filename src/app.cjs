const Express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const clientRouter = require("./Components/client/clientRoutes.js");
const talentRouter = require("./Components/talent/talentRoutes.js");

dotenv.config();

const corsOptions = {
    Origin: 'http://localhost:5173',
    credentials: true,
    optionSucessstatus: 200
}

const app = Express();
const PORT = process.env.PORT || 8000;
const MONGODB_URL = process.env.MONGODB_URI;
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(cors(corsOptions))


app.use("/client", clientRouter)
app.use("/talent", talentRouter)


app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to BlockGigs"
    });
});


app.listen(PORT, async () => {
    try {
        await connectDB(MONGODB_URL);
        console.log(`Server is running on port ${PORT}`)
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = { app }