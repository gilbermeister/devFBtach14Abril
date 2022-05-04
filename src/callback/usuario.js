'use strict'

// const info = {
//     valor: 'La info',
//     unaF: ()=>{
//         console.log('Importado con Js');
//     }
// };

// module.exports.info = info;


module.exports = {
    usuarioSinc(id){
        const tiempoInicio = new Date().getTime();
        while (new Date().getTime() - tiempoInicio <= 3000){
            //esperando
        }
        return {
            "id": id,
            "nombre": `Usuario ${id}`
        }
    },
    usuarioAsinc(){
        console.log("jajaja");
    }
}