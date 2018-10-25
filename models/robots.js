const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RobotSchema = new Schema({

        name: {
            type: String,
            required: 'El nombre es requerido'
        },

        version: {

            type: Number,
            default: 2018

        },

        descripcion: {
            type: String
        },
        features: [{
            type: String,
            required: ' Features es requerido',
            enum: ['GESTURES', 'HUMOR', 'WORK', 'MATHS']
        }],
        isAvailable: {
            type: boolean,
            default: false
        }
    },

    {
        timestamps: true
    }
    
    );

module.exports = mongoose.model('Robot', RobotSchema);
// const Robot = mongoose.model('robot', RobotSchema);