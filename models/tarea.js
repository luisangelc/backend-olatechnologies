import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const tareaSchema = new Schema({
    nombre: { type: String, required: [true, 'Nombre obligatorio'] },
    estatus: { type: Boolean, default: false },
    fechaCreacion: { type: Date, default: Date.now },
    fechaActualizacion: { type: Date, default: Date.now },
});

tareaSchema.methods.toJSON = function () {
    const obj = this.toObject();
    delete obj.fechaActualizacion;
    return obj;
}

// Convertir a un modelo de mongoose
const Tarea = mongoose.model('Tarea', tareaSchema);

export default Tarea;