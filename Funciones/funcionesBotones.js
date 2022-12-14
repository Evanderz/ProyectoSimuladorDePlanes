//BOTONES GENERALES

//BOTON DE LA VENTANA ERROR PARA OCULTAR LA MISMA
const botonMensajeInvalido = document.getElementById("btnMensajeInvalido");
botonMensajeInvalido.onclick = () => {


    volverInvisible("cartelMensajeInvalido");

}

//FIN DE LOS BOTONES GENERALES


//BOTONES FUNCION CLIENTES


//BOTON PARA EMPEZAR A USAR LAS FUNCIONES DEL CLIENTE
let botonCliente = document.getElementById("btnCliente");
botonCliente.onclick = () => {


    volverVisible("sueldo");
    volverInvisible("inicio");

}

//BOTON PARA COMPARAR UNA VEZ QUE SE INGRESA EL SUELDO
let botonIngresarSueldo = document.getElementById("btnSueldoIngresado");
botonIngresarSueldo.onclick = () => {
 
    compararSueldoIngresado();

}

//BOTON PARA VOLVER AL INICIO DESDE LA VENTANA DONDE SE INGRESA EL SUELDO
let botonVolverInicioDesdeSueldoIngresado = document.getElementById("btnVolverInicioDesdeSueldoIngresado")
botonVolverInicioDesdeSueldoIngresado.onclick = () =>{

    volverPantallaInicio("sueldo");


}

//BOTON DEL CARTEL EN CASO DE NO PODER ACCEDER A NINGUN PLAN
let botonNoApto = document.getElementById("btnNoAptoParaPlan");
botonNoApto.onclick = () => {

    volverPantallaInicio("noAptoParaPlan");

}

//BOTONES PARA SELECCIONAR CANTIDAD DE CUOTAS                                       
let botonDoceCuotas = document.getElementById("btnDoceCuotas");
botonDoceCuotas.onclick = () => {
    mensajePlanYConfirmacion(12);
}
let botonVeintiCuatroCuotas = document.getElementById("btnVeintiCuatroCuotas");
botonVeintiCuatroCuotas.onclick = () => {
    mensajePlanYConfirmacion(24);
}
let botonTreintaiSeisCuotas = document.getElementById("btnTreintaiSeisCuotas");
botonTreintaiSeisCuotas.onclick = () => {
    mensajePlanYConfirmacion(36);
}
let botonCuarentaiOchoCuotas = document.getElementById("btnCuarentaiOchoCuotas");
botonCuarentaiOchoCuotas.onclick = () => {
    mensajePlanYConfirmacion(48);
}
let botonSesentaCuotas = document.getElementById("btnSesentaCuotas");
botonSesentaCuotas.onclick = () => {
    mensajePlanYConfirmacion(60);
}

//BOTON PARA PASAR A AL FORMULARIO PARA EL CLIENTE DESPUES DE QUE CONFIRMA EL PLAN
let botonConfirmarPlan = document.getElementById("btnConfirmarPlan");
botonConfirmarPlan.onclick = () => {


    volverInvisible("mensajePlan");
    volverVisible("formularioCliente");

}

//BOTON PARA VOLVER AL MENSAJE DEL PLAN
let botonRetrocederMensajePlan = document.getElementById("btnRetrocederMensajePlan");
botonRetrocederMensajePlan.onclick = () => {

    volverPantallaCuotas("mensajePlan");

}

//BOTON PARA VOLVER AL ELEGIR LAS CUOTAS DESDE EL FORMULARIO
let botonVolverElegirCuota = document.getElementById("btnVolverElegirCuota");

botonVolverElegirCuota.onclick = () => {

    volverPantallaCuotas("formularioCliente");

}

//BOTON PARA VOLVER AL FORMULARIO DESDE LA VENTANA DONDE TE MUESTRA LA INFORMACION INGRESADA
let botonRetrocederAlFormulario = document.getElementById("btnRetrocederAlFormulario")
botonRetrocederAlFormulario.onclick = () => {

    volverPantallaFormulario("datosCliente");

}


//BOTON PARA VOLVER AL INICIO DESDE LA ULTIMA VENTANA 
let botonVolvePantallaInicio = document.getElementById("btnvolverPantallaInicio");
botonVolvePantallaInicio.onclick = () =>{

    volverPantallaInicio(`datosFinales`);

}

//BOTON PARA OBTENER LOS DATOS INGRESADOS Y POSTERIOMENTE MOSTRAR LA VENTANA CON LOS DATOS
let botonDatosCliente = document.getElementById("btnDatosCliente");
botonDatosCliente.onclick = () => {

    obtenerValoresDeDatosIngresadosCliente();
    
}

let botonConfirmarPasoFinal = document.getElementById("btnConfirmarPasoFinal");
botonConfirmarPasoFinal.onclick = () => {

 mensajeFinalYPushAlArray();

}

//FIN BOTONES DE LAS FUNCIONES DEL CLIENTE

//BOTONES DE LAS FUNCIONES DEL ADMIN

//BOTON PARA IR A LA VENTANA DE LOGEO
const botonAdmin = document.getElementById("btnAdmin");
botonAdmin.onclick = () => {

    volverInvisible("inicio");
    volverVisible("ingresarAdmin");
}

//BOTON PARA VERIFICAR EL USUARIO Y LA CONTRASE??A INGRESA Y PASAR A LA SIGUIENTE PANTALLA
const botonConfirmarIngreso = document.getElementById("btnConfirmarIngreso");
botonConfirmarIngreso.onclick = () => {

  verificarUsuarioYContrase??a();

}

//BOTON PARA VOLVER AL INICIO DESDE LA PANTALLA DE LOGEO
let botonVolverInicioDesdeIngresarAdmin = document.getElementById("btnVolverInicioDesdeIngresarAdmin");
botonVolverInicioDesdeIngresarAdmin.onclick = () =>{

     volverPantallaInicio("ingresarAdmin");

}

//BOTON PARA IR A LA PANTALLA PARA AGREGAR UN ADMIN
let botonAgregarAdmin = document.getElementById("btnAgregarAdmin");
botonAgregarAdmin.onclick = () => {

    volverInvisible("bienvenidaAdmin");
    volverInvisible("cerrarSesion")
    volverVisible("formularioNuevoAdmin");

}

//BOTON PARA VOLVER A LA VENTANA DE OPCIONES DE ADMIN
let botonVolverBienvenida = document.getElementById("btnVolverBienvenida");
botonVolverBienvenida.onclick = () => {

    volverInvisible("formularioNuevoAdmin");
    volverVisible("bienvenidaAdmin");
    volverVisible("cerrarSesion")

}


//BOTON PARA OBTENER LOS DATOS INGRESADOS Y HACER EL PUSH AL ARRAY
let botonConfirmarAdmin = document.getElementById("btnConfirmarAdmin");
botonConfirmarAdmin.onclick = () => {

  obtenerValoresDeDatosIngresadosAdmin();

}


//BOTON PARA IR A LA VENTANA PARA BORRAR ADMIN
let botonBorrarAdmin = document.getElementById("btnBorrarAdmin");
botonBorrarAdmin.onclick = () => {

    volverInvisible("bienvenidaAdmin");
    volverInvisible("cerrarSesion")
    volverVisible("borrarAdmin");

}

//BOTON PARA CONFIRMAR LE ELIMINACION DEL ADMIN INGRESADO EN CASO DE EXISTIR
let botonConfirmarBorrarAdmin = document.getElementById("btnConfirmarBorrarAdmin");
botonConfirmarBorrarAdmin.onclick = () => {

 borrarAdmin();

}

let botonBuscarCliente = document.getElementById("btnBuscarCliente");
botonBuscarCliente.onclick = () =>{


    volverInvisible("bienvenidaAdmin");
    volverInvisible("cerrarSesion")
    volverVisible("buscarCliente");


}

let botonBuscar = document.getElementById("btnBuscarDato");
botonBuscar.onclick = () =>{

    buscarCliente();


}

let botonBuscarOtroCliente = document.getElementById("btnBuscarOtroCliente");
botonBuscarOtroCliente.onclick = () =>{


    volverInvisible("datosClienteBuscados");
    volverVisible("buscarCliente");

}

let botonSiguienteCliente = document.getElementById("btnSiguienteCliente");
botonSiguienteCliente.onclick = () =>{

    pasarSiguienteContacto();


}

let botonBorrarCliente = document.getElementById("btnBorrarCliente")
botonBorrarCliente.onclick = () => {


borrarCliente();


}

let botonCambiarEstado = document.getElementById("btnCambiarEstado");
botonCambiarEstado.onclick = () =>{

    cambiarEstado();

}

let botonCerrarSesion = document.getElementById("btnCerrarSesion");
botonCerrarSesion.onclick = () =>{

volverInvisible("cerrarSesion");
volverInvisible("bienvenidaAdmin");
volverVisible("ingresarAdmin");


}
