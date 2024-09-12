//import express from "express"
//import http from "http"
//import router from "./router.js";

//1. Crear servidor
//const server = http.createServer(router);


//2. Se define un puerto del computador donde quieres que funcione tu servidor backend
//const port = 3000

//3. definir una callback que se va a ejecutar cuando se inicie el servidor
//const ready = () => console.log("SERVER READY ON PORT " + port);

// 4. inicio/levanto/corro el servidor
//server.listen(port, ready);
//escucho el puerto de la variable "port" para levantar el servidor "server"
//y luego ejecuto la callback que me va a informar en la consola que el servidor está funcionado

import express from "express";

try {
    const server = express();
    const port = 8000;
    const ready = () => console.log("server ready on port " + port);

    server.listen(port, ready);

    // para definir una ruta para leer datos el método get()
    server.get("/", (request, response) => {
        try {
            return response.status(200).json({
                message: "CODER COMMERCE API",
            });
        } catch (error) {
            const { statusCode, message } = error;
            return response
                .status(statusCode || 500)
                .json({ message: message || "FATAL ERROR" });
        }
    });
}catch{
    
}