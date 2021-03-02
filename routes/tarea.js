import express from 'express';
const router = express.Router();

import Tarea from '../models/tarea';

router.post('/nueva-tarea', async (req, res) => {
    const body = req.body;

    try {
        const tareaDB = await Tarea.create(body);
        res.status(201).json(tareaDB);
    } 
    catch (error) {
        return res.status(500).json({ mensaje: 'Ocurrio un error interno de servidor. ' + error, error });
    }
});

router.put('/tarea/:id', async (req, res) => {
    const _id = req.params.id;
    const body = req.body;
    
    try {
        body.fechaActualizacion = Date.now();
        const tareaDb = await Tarea.findByIdAndUpdate(_id, body, { new: true });
        
        if (!tareaDb) return res.status(400).json({ mensaje: 'No se encontró la tarea a editar con el ID proporcionado.' });
        
        res.json(tareaDb);
    } 
    catch (error) {
        return res.status(500).json({ mensaje: 'Ocurrio un error al editar. ', error });
    }
});

router.delete('/tarea/:id', async (req, res) => {
    const _id = req.params.id;
    
    try {
        const tareaDb = await Tarea.findByIdAndDelete({ _id });
      
        if (!tareaDb) return res.status(400).json({ mensaje: 'No se encontró la tarea a eliminar con el ID proporcionado.' });

        res.json(tareaDb);
    } 
    catch (error) {
      return res.status(500).json({ mensaje: 'Ocurrio un error interno de servidor', error });
    }
});

router.get('/tareas', async (req, res) => {
    try {
        const tareaDb = await Tarea.find();
        res.json(tareaDb);
    } 
    catch (error) {
        return res.status(500).json({ mensaje: 'Ocurrio un error interno de servidor', error });
    }
});

router.get('/tarea/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const tareaDb = await Tarea.findOne({ _id });
        res.json(tareaDb);
    } 
    catch (error) {
        return res.status(500).json({ mensaje: 'Ocurrio un error interno de servidor', error });
    }
});

/* Exportación de router */
module.exports = router;