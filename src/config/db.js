const { connect } = require("mongoose");

const connectDB = async (url) => {
    try {
        await connect(url);
        console.log("Connect to database successfull!");
    } catch (error) {
        console.log("Failed to connect to database", error.message);
        process.exit(1)
    }
}

module.exports = connectDB