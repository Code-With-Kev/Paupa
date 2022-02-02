const mongoose = require ('mongoose')

const bubbleSchema = new mongoose.Schema({
    label: {
        type: String,
        required: [true, "A label is required"],
        maxlength: [35, "Label must be under 35 characters"]
    },
    priority: {
        type: String,
        default: "Low"
    },
    description: {
        type: String,
        maxlength : [50, "Description must be less than 50 characters"],
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    isExpense: {
        type: Boolean,
        default: false,
        required: [true, "We must know if this is an expense"]
    },
    cost: {
        type: Number,
        default: 1,
    }
}, {timestamp: { type: Date, default: Date.now},});


const Bubble = mongoose.model('Bubble', bubbleSchema)

module.exports = Bubble
