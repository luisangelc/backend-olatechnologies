import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
require('./config/config');

const app = express();

/* Conexión a DB */
const options = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true };
mongoose.connect(process.env.URLDB, options)
    .then(() => { 
        console.log("Conectado a mongoDB"); 
    },
    err => {
        console.error("DB Connection Error: ", err);
    }
);

/* Middleware */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Rutas */
app.use('/api', require('./routes/tarea'));
// app.get('/', (req, res) => {
//     res.send('Ola Mundo!');
// });

/* Middleware para el lado cliente router modo history */
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
    console.log('App listening on port ' + app.get('puerto'));
});