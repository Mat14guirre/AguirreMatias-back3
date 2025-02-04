import express from "express";
import usuariosRouter from "./routes/usuarios.router.js"
import manejadorErrores from "./middlewares/error.js";
import compression from "express-compression";
import mockingRouter from "./routes/mocks.router.js"; 
import mongoose from "mongoose";



const app= express();
const PUERTO = 9000;
const connection = mongoose.connect(`mongodb+srv://matiasaguirre269:1BR6PQBKnN6ga6mS@cluster0.nlvme.mongodb.net/Adopciones`)

//MIDDLEWARE
app.use(express.json());
app.use(compression({
    brotli:{enabled:true,zlib:{}}
}));

//RUTAS
app.use("/api/users",usuariosRouter);
app.use("/api/mocks" , mockingRouter);
app.use(manejadorErrores);

app.listen(PUERTO, ()=> console.log("ESCUCHANDO EN PUERTO " + PUERTO));