const mongoose = require ('mongoose')

const expenseSchema = new mongoose.Schema({
    label: {
        type: String,
        required: [true, "A label is required"],
        minlength: [3, "Label must be longer than 3 characters"],
    },
    description: {
        type: String,
        required: [true, "A description is required"],
        minlength: [3, "Description must be longer than 3 characters"],
    },
    cost: {
        type: Number,
        required: [true, "Cost is required"],
    },
    date: {
        type: Date,
        required: [true, "A date is required"],
    },
}, {timestamps: true});


const Expense = mongoose.model('Expense', expenseSchema)

module.exports = Expense
