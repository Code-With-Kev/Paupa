const mongoose = require ('mongoose')

const bubbleSchema = new mongoose.Schema({
    label: {
        type: String,
        required: [true, "A label is required"],
    },
    priority: {
        type: String,
        required: [true, "A priority rating is required"],
    },
    description: {
        type: String,
        maxlength : [160, "Description must be at least 3 characters"],
    },
    startDate: {
        type: Date,
        min: Date.now(),
        validate: [(value) => {this.endDate >= value, 'End Date cannot be after Start Date'}]
    },
    endDate: {
        type: Date,
        validate: [(value) => this.startDate <= value, 'Start Date cannot be after End Date']
    },
}, {timestamps: true});


const Bubble = mongoose.model('Bubble', bubbleSchema)

module.exports = Bubble

// figure out how to set default value to zero