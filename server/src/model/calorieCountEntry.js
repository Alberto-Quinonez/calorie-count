const mongoose = require('mongoose');

const { Schema } = mongoose;

const MODEL_NAME = 'CalorieCountEntry';

const requiredNumber = {
    type: Number,
    required: true,
};

const optionalNumber = {
    type: Number,
    required: false,
};

const calorieCountEntrySchema = new Schema({
    calories: {
        ...requiredNumber
    },
    protein: { 
        ...optionalNumber
    },
    carbohydrates: {
        ...optionalNumber
    },
    fat: {
        ...optionalNumber
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