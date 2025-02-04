export const generarInfoError= (usuario) => {
    return `los datos estan incompletos o no son validos.
    necesitamos recibir los siguientes datos:
    -Nombre: string, pero recibimos ${usuario.nombre}
    -Apellido: string, pero recibimos ${usuario.apellido}
    -Email: string, recibimos ${usuario.email}`
}