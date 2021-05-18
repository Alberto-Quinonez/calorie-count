const mongoose = require('mongoose');

const { Schema } = mongoose;

const MODEL_NAME = 'CalorieCountEntry';

const requiredNumber = {
    type: Number,
    required: true,
};

const calorieCountEntrySchema = new Schema({
    protein: { 
        ...requiredNumber
    },
    carbohydrates: {
        ...requiredNumber
    },
    fat: {
        ...requiredNumber
    },
    date: {
        type: Date,
        required: true,
    },
}, {
    timestamps: true,
});

const LogEntry = mongoose.model(MODEL_NAME, calorieCountEntrySchema);

module.exports = LogEntry;