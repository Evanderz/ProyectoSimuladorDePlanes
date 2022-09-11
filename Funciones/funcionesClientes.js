
/*
Segun tu ingreso te informa que prestamo podes sacar y te da la opcion de seleccionar en 12,24 y 36 cuotas para despues informarte como te queda el plan, en caso de no poner ESC o un monto cuando te lo pide saldra error.
*/


let presupuestoCliente;
let montoPrestamo;
let numeroOpciones;
let idUsuario;
let mailUsuario;
let nombreUsuario;
let apellidoUsuario;
let telefonoUsuario;
let numeroCuotas;
const tasaInteresAnual = 60;
let acumuladoClientes =  [];

//CREO CLASE PARA LOS DATOS DEL CLIENTE
class DatosCliente {

    constructor(objeto) {

        this.idCliente = objeto.idCliente;
        this.nombreCliente = objeto.nombreCliente;
        this.apellidoCliente = objeto.apellidoCliente;
        this.mailCliente = objeto.mailCliente;
        this.telefonoCliente = objeto.telefonoCliente;
        this.montoPrestamoCliente = objeto.montoPrestamoCliente;
        this.montoCuotaCliente = objeto.montoCuotaCliente;
        this.cantidadCuotaCliente = objeto.cantidadCuotaCliente;
        this.estadoContactado = objeto.estadoContactado;
        this.fechaCreacion = objeto.fechaCreacion;
        this.actualizacionFechaEstado = objeto.actualizacionFechaEstado;
    }


}

//HAGO PUSH DE DATOS HARDCORDEADOS
acumuladoClientes.push(new DatosCliente({ idCliente: 1, nombreCliente: "Diego", apellidoCliente: "Vellon", mailCliente: "DIEEE@GG.COM", telefonoCliente: 1112223336, montoPrestamoCliente: 1250000, montoCuotaCliente: 3144, cantidadCuotaCliente: 12, estadoContactado: "no contactado", fechaCreacion: "2/8/2022", actualizacionFechaEstado: " " }))
acumuladoClientes.push(new DatosCliente({ idCliente: 2, nombreCliente: "Yanina", apellidoCliente: "Sun", mailCliente: "Yann@GG.COM", telefonoCliente: 1444223336, montoPrestamoCliente: 11360000, montoCuotaCliente: 6144, cantidadCuotaCliente: 24, estadoContactado: "contactado", fechaCreacion: "2/8/2022", actualizacionFechaEstado: "4/8/2022" }))
acumuladoClientes.push(new DatosCliente({ idCliente: 3, nombreCliente: "Luciana", apellidoCliente: "Vozzi", mailCliente: "Luz@GG.COM", telefonoCliente: 145866666, montoPrestamoCliente: 1478000, montoCuotaCliente: 1444, cantidadCuotaCliente: 36, estadoContactado: "contactado", fechaCreacion: "5/8/2022", actualizacionFechaEstado: "10/8/2022" }))
//CARGO LO GUARDADO EN EL STORAGE
clientesCargados = CargarJSON("listaClientes");

//VERIFICO QUE EL STORAGE TENGA DATOS PARA REEMPLAZAR LOS DATOS EN EL ARRAY SINO LO DEJA COMO ESTA

// acumuladoClientes = verificarGuardadoYCargarJSON(clientesCargados,acumuladoClientes,DatosCliente);

//TERNARIO
acumuladoClientes = clientesCargados? recorrerArray(clientesCargados,acumuladoClientes,DatosCliente) :acumuladoClientes;
console.log(acumuladoClientes);

//COMPARA EL SUELDO INGRESADO PARA LUEGO INFORMAR A QUE TIPO DE PRESTAMO SE PUEDE ACCEDER
const compararSueldoIngresado = () =>{


    presupuestoCliente = document.getElementById("SueldoMontoNeto").value;
    presupuestoCliente = parseInt(presupuestoCliente);
    let compararMontoMenorQue = menorQue(presupuestoCliente);
    let compararMontoMayorQue = mayorQue(presupuestoCliente);
    let compararMontoMayorMenorQue = mayorQueYMenorQue(presupuestoCliente);


    if (compararMontoMenorQue(0) == true) {

        mensajeCartelError("El monto que ingreso no es valido.")

    } else if (compararMontoMenorQue(30000) == true) {


        volverVisible("noAptoParaPlan");
        volverInvisible("sueldo");
        let parrafoNoApto = document.getElementById("parrafoNoAptoParaPlan");
        parrafoNoApto.innerText = "No hay ningun plan que podemos ofrecerle con ese presupuesto";



    } else if (compararMontoMenorQue(70000) == true) {


        montoPrestamo = 100000;
        volverVisible("presupuesto");
        volverInvisible("sueldo");
        tituloParrafoPresupuesto("tituloPresupuesto", "parrafoPresupuesto", "Su presupuesto es bajo");


    } else if (compararMontoMenorQue(150000) == true) {

        montoPrestamo = 250000;
        volverVisible("presupuesto");
        volverInvisible("sueldo");
        tituloParrafoPresupuesto("tituloPresupuesto", "parrafoPresupuesto", "Su presupuesto es Medio");


    } else {

        montoPrestamo = 450000;
        volverVisible("presupuesto");
        volverInvisible("sueldo");
        tituloParrafoPresupuesto("tituloPresupuesto", "parrafoPresupuesto", "Su presupuesto es Alto");

    }




}

//OBTIENE EL ELEMENTO DEL TITULO Y EL PARRAFO PARA MODIFICARLO E INFORMAR A QUE PLAN PUEDE ACCEDER
const tituloParrafoPresupuesto = (idTituloPresupuesto, idParrafoPresupuesto, textoTitulo) => {

    let tituloMostrar = document.getElementById(idTituloPresupuesto);
    let parrafoMostrar = document.getElementById(idParrafoPresupuesto);
    tituloMostrar.innerText = textoTitulo;

    parrafoMostrar.innerText = `Puede acceder a un prestamo de $${montoPrestamo} seleccione entre las siguientes cantidad de cuotas para ver los planes: `;

}
//CALCULA EL MONTO DE LA CUOTA
const calculoParaSacarValorCuota = (montoPrestamo, numeroOpciones, tasaInteresAnual) => {

    return ((montoPrestamo * (tasaInteresAnual * (numeroOpciones / 12))) / 100 + montoPrestamo) / numeroOpciones;

}
//CREO UN DIV CON LOS BOTONES DE LAS CUOTAS
let contenedor = document.getElementById("contenedorApp")
let botonesPresupuesto = document.createElement("div")
let mensajeNoApto = document.createElement("div")
mensajeNoApto.id = "noAptoParaPlan"
mensajeNoApto.className = "centrado inactivo p-5 mb-4 bg-dark rounded-3";
mensajeNoApto.innerHTML = ` <p id="parrafoNoAptoParaPlan" style="color:rgb(255, 255, 255);"></p>
                                <button id="btnNoAptoParaPlan" type="button" class="btn btn-secondary p-1 mb-1">Volver al Inicio</button>`
botonesPresupuesto.id = "presupuesto";
botonesPresupuesto.className = "centrado inactivo p-5 mb-4 bg-dark rounded-3";
botonesPresupuesto.innerHTML = ` <label>
                                        <h5 id="tituloPresupuesto" style="color:rgb(255, 255, 255);"></h5>
                                        <p id="parrafoPresupuesto" style="color:rgb(255, 255, 255);"></p>
                                     </label>
                                     <button  type="button" class="btn btn-secondary p-1 mb-1" id="btnDoceCuotas">12
                                        Cuotas</button>
                                     <button id="btnVeintiCuatroCuotas" type="button" class="btn btn-secondary p-1 mb-1">24
                                        Cuotas</button>
                                     <button id="btnTreintaiSeisCuotas" type="button" class="btn btn-secondary p-1 mb-1">36
                                        Cuotas</button>
                                     <button id="btnCuarentaiOchoCuotas" type="button" class="btn btn-secondary p-1 mb-1">48
                                        Cuotas</button>
                                     <button id="btnSesentaCuotas" type="button" class="btn btn-secondary p-1 mb-1">60
                                        Cuotas</button>`
contenedor.appendChild(botonesPresupuesto);
contenedor.appendChild(mensajeNoApto);



//FUNCION PARA MODIFICAR EL PARRAFO DONDE TE MUESTRA TODA LA INFORMACION DEL PLAN AL QUE ESTA POR ACCEDER

const mensajePlanYConfirmacion = (numeroDeCuotas) => {

    numeroCuotas = numeroDeCuotas;
    volverInvisible("presupuesto");
    volverVisible("mensajePlan");


    let parrafoMensajePlan = document.getElementById("idParrafoPlan");
    parrafoMensajePlan.innerText = `Su prestamo de $${montoPrestamo} en ${numeroDeCuotas} cuotas con un TNA del ${tasaInteresAnual}% le da una valor de cuota de $${parseInt(calculoParaSacarValorCuota(montoPrestamo, numeroDeCuotas, tasaInteresAnual))} `

}
//----------------------------------------------------------------------------------------------------------------------------


//FUNCION PARA VOLVER A LA VENTANA DE PRESUPUESTO TOMANDO COMO PARAMETRO LA ID DE LA VENTANA QUE QUEREMOS OCULTAR
const volverPantallaCuotas = (opcionOcultar) => {

    volverInvisible(opcionOcultar);
    volverVisible("presupuesto");

}

//FUNCION PARA VOLVER A LA VENTANA DE FORMULARIO TOMANDO COMO PARAMETRO LA ID DE LA VENTANA QUE QUEREMOS OCULTAR
const volverPantallaFormulario = (opcionOcultar) => {


    volverInvisible(opcionOcultar);
    volverVisible("formularioCliente");

}

//FUNCION PARA VALIDAR SI TIENE CARACTERES QUE NO CORRESPONEN O SI HAY CASILLAS EN BLANCO
const validadorDeCaracteresCliente = () =>{

    //VALIDADOR PARA SOLO ADMITIR LETRAR Y NINGUN CARACTER ESPECIAL
    const validador = new RegExp('^[A-Z* ]+$', 'i');

    if (nombreUsuario == "" || apellidoUsuario == "" || mailUsuario == "" || telefonoUsuario == "") {

        mensajeCartelError("Dejo casillas sin rellenar")
        

        //Aca usamos el validador diciendo que si .test(variable.value) es diferente a validador 
    } else if ((!validador.test(nombreUsuario)) || (!validador.test(apellidoUsuario))) {

        mensajeCartelError("Ingreso caracteres incorrectos o dejo espacios en blanco")
        

    } else {

        volverInvisible("formularioCliente");
        volverVisible("datosCliente");
    }


}
 
//FUNCION PARA OBTENER LOS VALORES DE LOS DATOS INGRESADOS EN EL FORMULARIO PARA POSTERIORMENTE MOSTRARLOS
const obtenerValoresDeDatosIngresadosCliente =()=>{


    nombreUsuario = document.getElementById("nombre").value;
    let nombreCliente = document.getElementById("nombrePlan");
    nombreCliente.innerText = `Nombre: ${nombreUsuario}`;

    apellidoUsuario = document.getElementById("apellido").value;
    let apellidoCliente = document.getElementById("apellidoPlan");
    apellidoCliente.innerText = `Apellido: ${apellidoUsuario}`;

    mailUsuario = document.getElementById("mail").value;
    let mailCliente = document.getElementById("mailPlan");
    mailCliente.innerText = `Mail: ${mailUsuario}`;

    telefonoUsuario = document.getElementById("telefono").value;
    let telefonoCliente = document.getElementById("telefonoPlan");
    telefonoCliente.innerText = `Telefono: ${telefonoUsuario}`

    let montoPrestamoCliente = document.getElementById("montoPrestamoPlan");
    montoPrestamoCliente.innerText = `Monto del prestamo: ${presupuestoCliente}`;

    let cantidadCuota = document.getElementById("cantidadCuotaPlan");
    cantidadCuota.innerText = `Cantidad de cuotas: ${numeroCuotas}`;

    let porcentajeTNA = document.getElementById("porcentajeTNAPlan");
    porcentajeTNA.innerText = `TNA: %${tasaInteresAnual}`;

    let montoDeLaCuota = document.getElementById("montoDeLaCuotaPlan");
    montoDeLaCuota.innerText = `Monto de cuotas: ${parseInt(calculoParaSacarValorCuota(montoPrestamo, numeroCuotas, tasaInteresAnual))}`;

    validadorDeCaracteresCliente();
    

}

//FUNCION DONDE DONDE PONE EL ID AL NUEVO CLIENTE, MUESTRA EL MENSAJE FINAL Y DESPUES HACE EL PUSH AL ARRAY PARA LUEGO GUARDARLO EN EL STORAGE
const mensajeFinalYPushAlArray = () =>{

    //OBTENGO EL VALOR DE LA ULTIMA ID DEL ARRAY Y LE SUMO 1
    idUsuario = (acumuladoClientes[acumuladoClientes.length - 1].idCliente) + 1;

    let mensajeFinalCliente = document.getElementById("mensajeFinal");
    mensajeFinalCliente.innerText = `Sr/Sra: ${nombreUsuario} ${apellidoUsuario} gracias por confiar en nosotros y nos comunicaremos con usted dentro de un plazo de 48hs habiles.`;


    acumuladoClientes.push(new DatosCliente({ idCliente: idUsuario, nombreCliente: nombreUsuario, apellidoCliente: apellidoUsuario, mailCliente: mailUsuario, telefonoCliente: telefonoUsuario, montoPrestamoCliente: montoPrestamo, montoCuotaCliente: calculoParaSacarValorCuota(montoPrestamo, numeroCuotas, tasaInteresAnual), cantidadCuotaCliente: numeroCuotas, estadoContactado: "no contactado", fechaCreacion: diaHoy(), actualizacionFechaEstado: " " }))
    console.log(acumuladoClientes);

    volverInvisible("datosCliente");
    volverVisible("datosFinales");

    GuardarJSON("listaClientes",acumuladoClientes);


}













