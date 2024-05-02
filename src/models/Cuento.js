import mongoose from "mongoose"

// Define the schema for the words array
const WordSchema = new mongoose.Schema({
    prompt: String,
    examples: [String]
});

// Define the schema for the main document
const cuentoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    fullStory: {
        type: String,
        required: true
    },
    words: [WordSchema], // Array of WordSchema
    withBlanks: String
});

export default mongoose.models.Cuento || mongoose.model('Cuento', cuentoSchema);