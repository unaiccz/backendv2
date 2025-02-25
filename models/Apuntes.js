import mongoose from 'mongoose';

const ApuntesSchema = new mongoose.Schema({
  Asignatura: String,
  Tema: String,
  Apuntes: String,
  creador: {
    type: "String",
    default: "Anónimo"
  }
});

const Apuntes = mongoose.model('Apuntes', ApuntesSchema);

export default Apuntes;