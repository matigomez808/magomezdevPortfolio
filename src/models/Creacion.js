import mongoose from "mongoose"

const creacionSchema = new mongoose.Schema({
    author : {type: String},
    story : {type: String},
    originalStory : [String],
    originalTitle: [String],
    timestamp : {type: Date},

})

export default mongoose.models.Creacion || mongoose.model('Creacion', creacionSchema);