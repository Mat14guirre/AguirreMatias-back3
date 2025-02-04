import { EErrors } from "../services/errors/enum.js";

const manejadorErrores =(error,req,res,next)=>{
    console.log(error.cause);
    switch(error.code){
        case EErrors.TIPO_INVALIDO:
            res.send({status:"error", error: error.nombre})
            break;
        default:
            res.send({status:"error",error:"error desconocido"})
    }
    
}

export default manejadorErrores