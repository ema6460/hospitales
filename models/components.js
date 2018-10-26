const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ComponentSchema = new Schema({
    name:{
        type: String,
        required: "El component es requerido"
    },
    type:{
        type: String,
        enum: ["Mejora", "Reparacion"]
    }
},{
    timestamps: true
}
    
);

module.exports = mongoose.model('Component', ComponentSchema);