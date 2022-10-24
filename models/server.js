import express from "express"
import cors from 'cors'
import { Router } from "express";
import router from "../routes/usuarios.js";

class Server {

    constructor() {
        this.app = express();
        this.port=  process.env.PORT;
        this.usuariosPath= '/api/usuarios';

        //middleware Funciones que van añadirle otra funcionalidad

        this.middlewares();
        //rutas de mi aplicación 
        this.routes(); 

    }; 

    middlewares() {

        //Configuraciion cors
        this.app.use(cors());

        // Lectura y parseo del body 
        this.app.use(express.json()); 
        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        
        this.app.use(this.usuariosPath, router)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })
    }

}


export {

    Server
}