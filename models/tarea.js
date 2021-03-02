import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const tareaSchema = new Schema({
    nombre: { type: String, required: [true, 'Nombre obligatorio'] },
    activo: { type: Boolean, default: true },
    fechaCreacion: { type: Date, default: Date.now },
    fechaActualizacion: { type: Date, default: Date.now },
});

// Convertir a un modelo de mongoose
const Tarea = mongoose.model('Tarea', tareaSchema);

export default Tarea;