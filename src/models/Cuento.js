import mongoose from "mongoose"

const cuentoSchema = new mongoose.Schema({
    title : {type: String},
    fullStory : {type: String},
    choppedStory : [String],
    words : [String],
    withBlanks: {type: String}

})

export default mongoose.models.Cuento || mongoose.model('Cuento', cuentoSchema);