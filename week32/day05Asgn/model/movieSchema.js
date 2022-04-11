import mongoose from 'mongoose';
const { Schema } = mongoose;

const movieSchema = new mongoose.Schema({
    title:{
        type: String,
        max:15,
        min:3,
        required: true
    },
    releaseDate:{
        type:Date,
        required: true,
        validate: function validator(value) {
            return value > new Date('1888-01-01')
        },
        message: props => `No Film released Before Year 1888`
    },
    cast:Schema.Types.String
})

export const movieModel = mongoose.model('movie', movieSchema);



