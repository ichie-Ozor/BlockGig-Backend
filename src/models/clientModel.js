const { Schema, model } = require("mongoose");

const clientSchema = new Schema({
    // name: {
    //     type: String,
    //     required: [true, "Please input the company's name"]
    // },
    email: {
        type: String,
        required: [true, "Please enter the email address"]
    },
    location: {
        type: String,
        required: [true, "Enter the location of the company"]
    },
    talent: {
        type: String,
        required: [true, "Enter the type of talent you are looking for"]
    },
    positions: {
        type: Number,
        required: [true, "Enter the number of positions needed"]
    },
    jobtype: {
        type: String,
        required: [true, "Enter the type of job"]
    },
    webaddress: {
        type: String,
        required: [true, "Enter the web address"]
    },
    payment: {
        type: String,
        required: [true, "enter the payment method"]
    },
    comment: {
        type: String,
        required: [true, "Enter the comment"]
    }
}, { timestamps: true })

const Client = model("client", clientSchema);

module.exports = Client