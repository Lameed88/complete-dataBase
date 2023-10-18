const mongoose = require("mongoose")
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true }
})

const Employee = mongoose.model("employee", employeeSchema)
module.exports = Employee