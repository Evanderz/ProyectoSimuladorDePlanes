//FUNCION PARA VOLVER AL INICIO TOMANDO COMO PARAMETRO LA IDE DE LA VENTANA QUE SE QUIERE OCULTAR
const volverPantallaInicio = (opcionOcultar) => {

    volverInvisible(opcionOcultar);
    volverVisible("inicio");

}

//MUESTRA LA VENTANA DE ERROR QUE TOMA COMO PARAMETRO EL MENSAJE QUE SE QUIERE MOSTRAR EN EL ERROR
const mensajeCartelError = (mensaje) => {

    let mensajeParrafoError = document.getElementById("mensajeError");
    mensajeParrafoError.innerText = mensaje;

    volverVisible("cartelMensajeInvalido");

}

//CALCULA LA FECHA DE HOY EN DD/MM/YYYY
const diaHoy = mostrarFecha => {

    let diaActual = new Date();

    return `${diaActual.getDate()}/${diaActual.getMonth() + 1}/${diaActual.getFullYear()}`;

}
 //FUNCION DE ORDEN SUPERIOR PARA COMPARAR SIS EL MONTO INGRESADO ES MENOR AL COMPARADO
const menorQue = (montoIngreso) => {

    return (numeroComparativo) => numeroComparativo > montoIngreso;

}
//FUNCION DE ORDEN SUPERIOR PARA COMPARAR SI EL MONTO INGRESADO ES MAYOR AL COMPARADO
const mayorQue = (montoIngreso) => {

    return (numeroComparativo) => numeroComparativo < montoIngreso;

}
//FUNCION DE ORDEN SUPERIOR PARA COMPARAR SI EL MONTO INGRESADO ES MAYOR Y MENOR A DOS NUMEROS COMPARATIVOS
const mayorQueYMenorQue = (montoIngreso) => {

    return (numeroMenor, numeroMayor) => (numeroMenor < montoIngreso) && (numeroMayor > montoIngreso);

}

//FUNCION PARA VOLVER VISIBLE UNA VENTANA TOMANDO COMO PARAMETRO LA ID DE LA MISMA
const volverVisible = (id) => {

    let visible = document.getElementById(id);
    visible.classList.remove("inactivo");
    visible.classList.add("activo");

}

//FUNCION PARA VOLVER INVISIBLE UNA VENTANA TOMANDO COMO PARAMETRO LA ID DE LA MISMA
const volverInvisible = (id) => {

    let invisible = document.getElementById(id);

    invisible.classList.remove("activo");
    invisible.classList.add("inactivo");

}

//FUNCION PARA GUARDAR EL CON JSON EN EL STORAGE TOMANDO COMO PRIMERA PARAMETRO EL NOMBRE DE LA ETIQUETA QUE QUERAMOS Y EL NOMBRE DEL ELEMENTO A GUARDAR
const GuardarJSON = (etiqueta,elementoGuardado) =>{


localStorage.setItem(etiqueta, JSON.stringify(elementoGuardado));


}

//FUNCION PARA CAGAR UN JSON TOMANDO COMO PARAMETRO LA ETIQUETA ANTERIORMENTE GUARDADA
const CargarJSON = (etiqueta) => {

   return JSON.parse(localStorage.getItem(etiqueta));

    

}



const recorrerArray = (cargaJSON,nombreArray,nombreClase) =>{


    nombreArray = [];
        
    
    for (const elemento of cargaJSON) {

        nombreArray.push(new nombreClase(elemento));

    }
    return nombreArray;

}


