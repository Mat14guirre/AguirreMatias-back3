//TEST Y MOCK
// const suma = (a,b) =>{
//     //test 2 
//     if (!a || !b ){
//         return 0 ;
//     } 

//     //test 1
//     if (typeof a !== "number" || typeof b !== "number"){
//         return null
//     }
//     //test 3
//     let resultado = a+b;
//     return resultado;
// }

// const suma= (...numeros) => {
//     //test 2:----------------------
//     if(numeros.length === 0){
//         return 0
//     }

//     //test 1:----------------------
//     let banderita = true;
//     for (let i = 0 ; i < numeros.length && banderita; i++){
//         if(typeof numeros [i] !== "number"){
//             banderita = false
//         }
//     }
//     if (banderita !== true){
//         return null
//     }
//     //test 3 y 4 ----------------------
//     let resultado = 0;
//     for (let i = 0; i < numeros.length; i++){
//         resultado += numeros[i];
//     }
//     return resultado
// }

const suma = (...numeros) =>{
    if(numeros.length ===0) return 0;
    if(!numeros.every(num=> typeof num=== "number")) return null;
    return numeros.reduce((acumulador, elemento)=> acumulador + elemento, 0); 
}


let testPasados = 0;
let testTotales = 4;

//  TEST 1
console.log("la funcion debe retornar null si algun parameetro no es numerico");
let resultado1= suma("2",3);
if(resultado1 === null){
    console.log("test 1 pasado!");
    testPasados++;
}else {
    console.log("el test 1 no se paso, se esperaba null pero se recibio: " + resultado1);
}

console.log("-----------------------------------------------------------------------------------------------")

//TEST 2
console.log("la funcion debe retornar 0 si no se pasa nignun parametro");
let resultado2 = suma();
if(resultado2 === 0){
    console.log("test 2 pasado!");
    testPasados++;
}else {
    console.log("el test 2 no paso, se esperaba 0 pero se recibio: "+ resultado2);
}

console.log("-----------------------------------------------------------------------------------------------")

//TEST 3
console.log("la funcion debe poder realizar la suma correctamente");
let resultado3 = suma (2, 3);
if ( resultado3 === 5){
    console.log("test 3 pasado!");
    testPasados++;
}else{
    console.log("el test 3 no se paso, se esperaba 5 pero se recibio: " + resultado3);
}

console.log("-----------------------------------------------------------------------------------------------")

//TEST 4
console.log("la funcion debe poder hacer la suma con cualquier cantidad de numeros");
let resultado4 = suma(1,2,3,4,5);
if(resultado4 === 15){
    console.log("test 4 pasado!");
    testPasados++
}else{
    console.log("el test 4 no se paso, se esperaba 15 pero se recibio: " + resultado4);
}

if ( testPasados === testTotales){
    console.log("TODOS LOS TEST COMPLETADOS CON EXITO");
}else {
    console.log ( " se pasaron "+ testPasados + " test de " + testTotales + " realizados" )
}