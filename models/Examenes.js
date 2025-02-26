import mongoose from 'mongoose';
const ExamenesSchema = new mongoose.Schema({
    Fecha: {
        type: String,
        required: true
    },
    Asignatura: {
        type: String,
        required: true
    },
    Temas: {
        type: String,
        required: true
    },
    creador: {
        type: "String",
        default: "Anónimo"
    }
});

const Examenes = mongoose.model('Examenes', ExamenesSchema);
export default Examenes;
