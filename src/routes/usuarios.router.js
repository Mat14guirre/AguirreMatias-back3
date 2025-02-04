import { Router } from "express";
const router = Router(); 
// import generarUsuarios from "../utils/util.js";
import CustomError from "../services/errors/customError.js";
import { generarInfoError } from "../services/errors/info.js";
import { EErrors } from "../services/errors/enum.js";

const arrayUsuarios= [];

router.post("/",async (req,res,next)=>{
    const {nombre,apellido,email} = req.body;

    try {
        if(!nombre || !apellido || !email) {
            throw CustomError.crearError({
                nombre:"usuario nuevo",
                causa: generarInfoError({nombre,apellido,email}),
                mensaje:"error al intentar crear un usuario",
                codigo: EErrors.TIPO_INVALIDO
            })
        }
        const usuario= {
            nombre,
            apellido,
            email
        }
        arrayUsuarios.push(usuario);
        console.log(arrayUsuarios);
        res.send({status:"sucess", payload: usuario})

    } catch (error) {
        next(error);
    }
})

// router.get("/", (req, res) => {
//     //Generamos un array de usuarios: 
//     const usuarios = []; 

//     for(let i = 0; i < 100; i++) {
//         usuarios.push(generarUsuarios()); 
//     }
//     res.json(usuarios);
// })



export default router; 

