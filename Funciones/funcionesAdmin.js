let nombreDeCuenta;
let contraseñaAdmin;
let nombrePilaAdmin;
let apellidoAdmin;
let mailAdmin;
let indexAdmin;
let clienteEncontrado;
let contendorDeCliente;



let cuentasAdmin = [{ idAdmin: 0, nombreUsuario: "dvellon", contraseñaUsuario: "123456", nombrePila: "Diego", apellido: "Vellon" },
{ idAdmin: 1, nombreUsuario: "lvozzi", contraseñaUsuario: "654321", nombrePila: "Luciana", apellido: "Vozzi" }];

//CREO LA CLASE PARA LA CUENTAS DE ADMIN
class Admin {

    constructor(objeto) {

        this.idAdmin = objeto.idAdmin;
        this.nombreUsuario = objeto.nombreUsuario;
        this.contraseñaUsuario = objeto.contraseñaUsuario;
        this.nombrePila = objeto.nombrePila;
        this.apellido = objeto.apellido;
        this.mailAdmin = objeto.mailAdmin;
        this.fechaDeCreacion = objeto.fechaDeCreacion;

    }

}

//SE CARGA EL JSON Y DESPUES SE VERIFICA SI TIENE DATOS
adminsCargados = CargarJSON("listaAdmin");
// cuentasAdmin = verificarGuardadoYCargarJSON(adminsCargados,cuentasAdmin,Admin);
//TERNARIO
cuentasAdmin = adminsCargados ? recorrerArray(adminsCargados, cuentasAdmin, Admin) : cuentasAdmin;
console.log(cuentasAdmin);

//SACA EL INDEX DEL CLIENTE PARA UTILIZARLO A LA HORA DE BUSCAR,BORRAR,ETC
let numeroIndexCliente = (array) => {
    let numeroIndex;
    return numeroIndex = (array.map(index => index.idCliente).indexOf(contendorDeCliente))

}

//SACA EL INDEX DEL ARRAY PARA ADMIN
const sacarIndexArrayCuentasAdmin = (valorBuscado) => {

    return (cuentasAdmin.map(index => index.nombreUsuario).indexOf(valorBuscado));

}


//FUNCION PARA VERIFICAR SI EL USUARIO Y LA CONTRASEÑA CON CORRECTAS
const verificarUsuarioYContraseña = () => {


    const nombreAdmin = document.getElementById("ingresoUsuarioAdmin").value;


    indexAdmin = sacarIndexArrayCuentasAdmin(nombreAdmin);

    //TERNARIO
    indexAdmin < 0 ? mensajeCartelError("El nombre de usuario no existe") : verificarContraseña();


}

//FUNCION PARA VERIFICAR LA CONTRASEÑA
const verificarContraseña = () => {

    const contraseñaAdmin = document.getElementById("ingresoContraseñaAdmin").value;
    if (cuentasAdmin[indexAdmin].contraseñaUsuario == contraseñaAdmin) {

        let mensajeBienvenida = document.getElementById("mensajeBienvenida");
        mensajeBienvenida.innerText = `Bienvenido \n${cuentasAdmin[indexAdmin].nombrePila} ${cuentasAdmin[indexAdmin].apellido}!`


        volverInvisible("ingresarAdmin");
        volverVisible("bienvenidaAdmin");
        volverVisible("cerrarSesion");

    } else {

        mensajeCartelError("La contraseña es incorrecta");

    }

}


//FUNCION AGREGAR ADMIN
//FUNCION PARA VALIDAR SI HAY CASILLAS EN BLANCO O SI HAY CARACTERES ESPECIALES EN EL NOMBRE Y APELLIDO
const validadorDeCaracteresAdmin = () => {



    (nombreDeCuenta == "" || contraseñaAdmin == "" || nombrePilaAdmin == "" || apellidoAdmin == "" || mailAdmin == "") ? mensajeCartelError("Dejo casillas sin rellenar") : validarCaracteresEspeciales();

}

const validarCaracteresEspeciales = () => {

    const validador = new RegExp('^[A-Z]+$', 'i');
    //Aca usamos el validador diciendo que si .test(variable.value) es diferente a validador 

    if ((!validador.test(nombrePilaAdmin)) || (!validador.test(apellidoAdmin))) {

        mensajeCartelError("Ingreso caracteres incorrectos o dejo espacios en blanco");

    } else {

        id = (cuentasAdmin[cuentasAdmin.length - 1].idAdmin) + 1;

        cuentasAdmin.push(new Admin({ idAdmin: id, nombreUsuario: nombreDeCuenta, contraseñaUsuario: contraseñaAdmin, nombrePila: nombrePilaAdmin, apellido: apellidoAdmin, mailAdmin: mailAdmin, fechaDeCreacion: diaHoy() }));

        nuevoMensaje = document.getElementById("mensajeBienvenida");
        nuevoMensaje.innerText = "Opciones";

        volverInvisible("formularioNuevoAdmin");
        volverVisible("bienvenidaAdmin");
        volverVisible("cerrarSesion")

        mensajeCartelConfirmado("Se agrego nuevo Admin");

        GuardarJSON("listaAdmin", cuentasAdmin);

    }


}



//FUNCION QUE OBTIENE LOS VALORES POR ID DE LOS DATOS INGRESADOS EN EL FORMULARIO Y LUEGO VERIFICA
const obtenerValoresDeDatosIngresadosAdmin = () => {

    nombreDeCuenta = document.getElementById("nombreCuenta").value;
    contraseñaAdmin = document.getElementById("contraseñaNueva").value;
    nombrePilaAdmin = document.getElementById("nombrePilaAdmin").value;
    apellidoAdmin = document.getElementById("apellidoAdmin").value;
    mailAdmin = document.getElementById("mailAdmin").value;

    validadorDeCaracteresAdmin();

}

//FIN FUNCION AGREGAR ADMIN

//FUNCION BORRAR ADMIN
//FUNCION DONDE BORRA EL ADMIN POR EL NOMBRE DE LA CUENTA EN CASO DE EXISTIR

const borrarAdmin = () => {


    let nombreAdminBorrar = document.getElementById("borrarAdminIngresado").value;

    const indexAdmin = sacarIndexArrayCuentasAdmin(nombreAdminBorrar);

    if (indexAdmin < 0) {

        mensajeCartelError("El admin no existe");


    } else {

        cuentasAdmin.splice(indexAdmin, 1);
        nuevoMensaje = document.getElementById("mensajeBienvenida");
        nuevoMensaje.innerText = "Opciones";

        volverInvisible("borrarAdmin");
        volverVisible("bienvenidaAdmin");
        volverVisible("cerrarSesion")

        mensajeCartelConfirmado("Se borro el Admin");

        GuardarJSON("listaAdmin", cuentasAdmin);

    }

}


//FIN FUNCION BORRAR ADMIN

//FUNCION BUSCAR CLIENTE


//OBTIENE EL TIPO DE FILTRO Y EL DATO BUSCADO PARA UTILIZARLO EN LA BUSQUEDA
const buscarCliente = () => {

    opcionBusqueda = document.getElementById("tipoDeDato").value
    datoBuscado = document.getElementById("clienteBuscado").value


    switch (opcionBusqueda) {


        case "Id":


            datoBuscado = parseInt(datoBuscado);

            if (isNaN(datoBuscado) || datoBuscado < 0) {

                mensajeCartelError("El ID tiene que ser un nro y no puede ser negativo");

            } else {
                clienteBuscado = acumuladoClientes.filter((filtro) => filtro.idCliente == datoBuscado)
                mostrarClienteBuscado(clienteBuscado);
            }
            break;

        case "Nombre":

            clienteBuscado = acumuladoClientes.filter((filtro) => filtro.nombreCliente == datoBuscado)
            mostrarClienteBuscado(clienteBuscado);
            break;

        case "Apellido":


            clienteBuscado = acumuladoClientes.filter((filtro) => filtro.apellidoCliente == datoBuscado)
            mostrarClienteBuscado(clienteBuscado);
            break;

        case "Fecha de generacion":


            clienteBuscado = acumuladoClientes.filter((filtro) => filtro.fechaCreacion == datoBuscado)
            mostrarClienteBuscado(clienteBuscado);
            break;

        case "Contactado/No Contactado":

         
            clienteBuscado = acumuladoClientes.filter((filtro) =>filtro.estadoContactado == (datoBuscado).toLowerCase());
          
            mostrarClienteBuscado(clienteBuscado);
            break;


        default:

            mensajeCartelError("Seleccione un tipo de dato.");
            break;


    }


}


//CORROBORA QUE EL CLIENTE BUSCADO EXISTA, EN CASO DE EXISTIR MUESTRA UNA VENTANA CON LOS DATOS
const mostrarClienteBuscado = (encontrandoCliente) => {

    clienteEncontrado = encontrandoCliente;

    if (clienteEncontrado.length > 0) {

        mensajeCartelAlerta(`Se encontraron ${clienteEncontrado.length} cliente/s`)

        contenedorDeDatosBuscados();

        volverInvisible("buscarCliente");
        volverVisible("datosClienteBuscados");


    } else {

        mensajeCartelError("No se encontro ningun cliente, intentelo de nuevo")
    }
}

// OBTIENE LOS VALORES DE LOS INPUT PARA LUEGO MOSTRARLOS
const contenedorDeDatosBuscados = () => {

    for (const cliente of clienteEncontrado) {
        let seleccionAdministrarCliente;
        let validadorAdministrarCliente;
        validadorAdministrarCliente = false

        idClienteBuscado = document.getElementById("idBuscado");
        idClienteBuscado.innerText = `Id: ${cliente.idCliente}`;
        contendorDeCliente = cliente.idCliente

        nombreClienteBuscado = document.getElementById("nombreBuscado");
        nombreClienteBuscado.innerText = `Nombre: ${cliente.nombreCliente}`;

        apellidoClienteBuscado = document.getElementById("apellidoBuscado");
        apellidoClienteBuscado.innerText = `Apellido: ${cliente.apellidoCliente}`;

        mailClienteBuscado = document.getElementById("mailBuscado");
        mailClienteBuscado.innerText = `Mail: ${cliente.mailCliente}`;

        telefonoClienteBuscado = document.getElementById("telefonoBuscado");
        telefonoClienteBuscado.innerText = `Telefono: ${cliente.telefonoCliente}`;

        montoTotalClienteBuscado = document.getElementById("montoTotalBuscado");
        montoTotalClienteBuscado.innerText = `Monto Total del Prestamo: ${cliente.montoPrestamoCliente}`;

        montoCuotaClienteBuscado = document.getElementById("montoCuotaBuscado");
        montoCuotaClienteBuscado.innerText = `Monto de la cuota: ${cliente.montoCuotaCliente}`;

        cantidadCuotaClienteBuscado = document.getElementById("cantidadCuotaBuscado");
        cantidadCuotaClienteBuscado.innerText = `Cantidad de cuotas: ${cliente.cantidadCuotaCliente}`;

        fechaCreacionClienteBuscado = document.getElementById("fechaCreacionBuscado");
        fechaCreacionClienteBuscado.innerText = `Fecha de creacion: ${cliente.fechaCreacion}`;

        estadoContactadoClienteBuscado = document.getElementById("estadoContactadoBuscado");
        estadoContactadoClienteBuscado.innerText = `Estado de contaco: ${cliente.estadoContactado}`;

        ultimaActualizacionClienteBuscado = document.getElementById("ultimaActualizacionBuscado");
        ultimaActualizacionClienteBuscado.innerText = `Ultima actualizacion del estado: ${cliente.actualizacionFechaEstado}`;

    }



}


//Funcion que toma el array temporal de mostrarClienteBuscado en caso de haber mas de uno para borrar el ultimo cliente del array
const pasarSiguienteContacto = () => {

    let arrayRetornado;

    if (clienteEncontrado.length > 0) {


        arrayRetornado = clienteEncontrado.splice(numeroIndexCliente(clienteEncontrado), 1)

        mostrarClienteBuscado(arrayRetornado);

    } else {

        mensajeCartelError("No hay mas clientes");


    }
}

//BORRA EL CLIENTE SELECCIONADO PARA LUEGO MANDARTE DE NUEVO A LA PANTALLA DE BUSQUEDA
const borrarCliente = () => {
    console.log(numeroIndexCliente(clienteEncontrado))
    acumuladoClientes.splice(numeroIndexCliente(clienteEncontrado), 1);
    GuardarJSON("listaClientes", acumuladoClientes);

    mensajeCartelAlerta("Cliente borrado");

    volverInvisible("datosClienteBuscados");
    volverVisible("buscarCliente");

}


//CAMBIA EL ESTADO A CONTACTADO PARA LUEGO VOLVER A TRAER LA INFORMACION ACTUALIZADA Y VOLVERLA A MOSTRAR
const cambiarEstado = () => {

if(acumuladoClientes[numeroIndexCliente(clienteEncontrado)].estadoContactado == "contactado"){

mensajeCartelAlerta(`El cliente ya fue contactado el ${acumuladoClientes[numeroIndexCliente(clienteEncontrado)].actualizacionFechaEstado}`)

}else{
    acumuladoClientes[numeroIndexCliente(clienteEncontrado)].estadoContactado = "contactado";
    acumuladoClientes[numeroIndexCliente(clienteEncontrado)].actualizacionFechaEstado = diaHoy();
    mensajeCartelAlerta("Estado cambiado a contactado");
    GuardarJSON("listaClientes", acumuladoClientes);

}

    contenedorDeDatosBuscados();
    volverInvisible("datosClienteBuscados");
    volverVisible("datosClienteBuscados");


}



//FIN FUNCION BUSCAR CLIENTE