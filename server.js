import express from "express";
import routerEx from "./src/data/controllers/routers/index.router.js";

try {
    //1. Crear servidor
    const server = express();
    //2. Se define un puerto del computador donde quieres que funcione tu servidor backend
    const port = 4000;
    //3. definir una callback que se va a ejecutar cuando se inicie el servidor
    const ready = () => console.log("server ready on port " + port);

    // 4. inicio/levanto/corro el servidor
    server.listen(port, ready);

    // para definir una ruta para leer datos el método get()
    server.get("/", (req, res) => {
        try {
            return res.status(200).json({
                message: "CODER COMMERCE API",
            });
        } catch (error) {
            const { statusCode, message } = error;
            return res
                .status(statusCode || 500)
                .json({ message: message || "FATAL ERROR" });
        }
    });
} catch {

}