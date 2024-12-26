const { Schema, model } = require("mongoose");

const talentSchema = new Schema({
    fullName: {
        type: String,
        required: [true, "Please input the company's name"]
    },
    email: {
        type: String,
        required: [true, "Please enter the email address"]
    },
    location: {
        type: String,
        required: [true, "Enter the location of the company"]
    },
    skill: {
        type: String,
        required: [true, "Enter the type of talent you are looking for"]
    },
    experience: {
        type: String,
        required: [true, "Enter the number of positions needed"]
    },
    availability: {
        type: String,
        required: [true, "Enter the web address"]
    },
    industry: {
        type: String,
        required: [true, "enter the payment method"]
    },
    portfolio: {
        type: String,
        required: [true, "Enter the type of job"]
    },
    file: {
        type: String,
        required: [true, "Enter the comment"]
    }
}, { timestamps: true })

const Talent = model("talent", talentSchema);

module.exports = Talent