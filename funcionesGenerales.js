const volverPantallaInicio = (opcionOcultar) => {

    volverInvisible(opcionOcultar);
    volverVisible("inicio");

}

const mensajeCartelError = (mensaje) => {

    let mensajeParrafoError = document.getElementById("mensajeError");
    mensajeParrafoError.innerText = mensaje;

    volverVisible("cartelMensajeInvalido");

}

const diaHoy = mostrarFecha => {

    let diaActual = new Date();

    return `${diaActual.getDate()}/${diaActual.getMonth() + 1}/${diaActual.getFullYear()}`;

}

const menorQue = (montoIngreso) => {

    return (numeroComparativo) => numeroComparativo > montoIngreso;

}

const mayorQue = (montoIngreso) => {

    return (numeroComparativo) => numeroComparativo < montoIngreso;

}

const mayorQueYMenorQue = (montoIngreso) => {

    return (numeroMenor, numeroMayor) => (numeroMenor < montoIngreso) && (numeroMayor > montoIngreso);

}

const volverVisible = (id) => {

    let visible = document.getElementById(id);
    visible.classList.remove("inactivo");
    visible.classList.add("activo");

}

const volverInvisible = (id) => {

    let invisible = document.getElementById(id);

    invisible.classList.remove("activo");
    invisible.classList.add("inactivo");

}

const GuardarJSON = (etiqueta,elementoGuardado) =>{


localStorage.setItem(etiqueta, JSON.stringify(elementoGuardado));


}

const CargarJSON = (etiqueta) => {

   return JSON.parse(localStorage.getItem(etiqueta));

    

}

const verificarGuardadoYCargarJSON = (cargaJSON,nombreArray,nombreClase) =>{
    

    
    if (cargaJSON) {
    
        nombreArray = [];
        
    
        for (const elemento of cargaJSON) {
    
            nombreArray.push(new nombreClase(elemento));

        }
        return nombreArray;
    
    }else{

        return nombreArray;
    }

    
   


}

const botonMensajeInvalido = document.getElementById("btnMensajeInvalido");
botonMensajeInvalido.onclick = () => {


    volverInvisible("cartelMensajeInvalido");

}