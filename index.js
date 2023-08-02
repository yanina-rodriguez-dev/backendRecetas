import express from 'express';

//puertos 
const app = express();
app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'),()=>{
    console.log('ESTO EN EL PUERTO ' +app.get('port'))
})



//middelwares



//routes
