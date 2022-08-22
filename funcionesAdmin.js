let cuentasAdmin = [{ idAdmin: 0, nombreUsuario: "dvellon", contraseñaUsuario: "123456", nombrePila: "Diego", apellido: "Vellon" },
{ idAdmin: 1, nombreUsuario: "lvozzi", contraseñaUsuario: "654321", nombrePila: "Luciana", apellido: "Vozzi" }];

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

adminsCargados = CargarJSON("listaAdmin");
console.log("lala"+adminsCargados);
cuentasAdmin = verificarGuardadoYCargarJSON(adminsCargados,cuentasAdmin,Admin);
console.log(cuentasAdmin);


const sacarIndexArrayCuentasAdmin = (valorBuscado) => {

    return (cuentasAdmin.map(index => index.nombreUsuario).indexOf(valorBuscado));

}


const botonAdmin = document.getElementById("btnAdmin");
botonAdmin.onclick = () => {

    volverInvisible("inicio");
    volverVisible("ingresarAdmin");
}

const botonConfirmarIngreso = document.getElementById("btnConfirmarIngreso");
botonConfirmarIngreso.onclick = () => {

    const nombreAdmin = document.getElementById("ingresoUsuarioAdmin").value;
    const contraseñaAdmin = document.getElementById("ingresoContraseñaAdmin").value;

    const indexAdmin = sacarIndexArrayCuentasAdmin(nombreAdmin);

    if (indexAdmin < 0) {

        mensajeCartelError("El nombre de usuario no existe");

    } else if (cuentasAdmin[indexAdmin].contraseñaUsuario == contraseñaAdmin) {

        let mensajeBienvenida = document.getElementById("mensajeBienvenida");
        mensajeBienvenida.innerText = `Bienvenido \n${cuentasAdmin[indexAdmin].nombrePila} ${cuentasAdmin[indexAdmin].apellido}!`


        volverInvisible("ingresarAdmin");
        volverVisible("bienvenidaAdmin");

    } else {

        mensajeCartelError("La contraseña es incorrecta");


    }

}

let botonVolverInicioDesdeIngresarAdmin = document.getElementById("btnVolverInicioDesdeIngresarAdmin");
botonVolverInicioDesdeIngresarAdmin.onclick = () =>{

     volverPantallaInicio("ingresarAdmin");


}

//FUNCION AGREGAR ADMIN

let botonAgregarAdmin = document.getElementById("btnAgregarAdmin");
botonAgregarAdmin.onclick = () => {

    volverInvisible("bienvenidaAdmin");
    volverVisible("formularioNuevoAdmin");

}

let botonVolverBienvenida = document.getElementById("btnVolverBienvenida");
botonVolverBienvenida.onclick = () => {

    volverInvisible("formularioNuevoAdmin");
    volverVisible("bienvenidaAdmin");

}

let botonConfirmarAdmin = document.getElementById("btnConfirmarAdmin");
botonConfirmarAdmin.onclick = () => {

    let nombreDeCuenta = document.getElementById("nombreCuenta").value;
    let contraseñaAdmin = document.getElementById("contraseñaNueva").value;
    let nombrePilaAdmin = document.getElementById("nombrePilaAdmin").value;
    let apellidoAdmin = document.getElementById("apellidoAdmin").value;
    let mailAdmin = document.getElementById("mailAdmin").value;

    const validador = new RegExp('^[A-Z]+$', 'i');

    if (nombreDeCuenta == "" || contraseñaAdmin == "" || nombrePilaAdmin == "" || apellidoAdmin == "" || mailAdmin == "") {

        mensajeCartelError("Dejo casillas sin rellenar");
    
        //Aca usamos el validador diciendo que si .test(variable.value) es diferente a validador 
    } else if ((!validador.test(nombrePilaAdmin)) || (!validador.test(apellidoAdmin))) {

        mensajeCartelError("Ingreso caracteres incorrectos o dejo espacios en blanco");
        

    } else {

        id = (cuentasAdmin[cuentasAdmin.length - 1].idAdmin) + 1;

        cuentasAdmin.push(new Admin({idAdmin:id, nombreUsuario:nombreDeCuenta, contraseñaUsuario:contraseñaAdmin, nombrePila:nombrePilaAdmin, apellido:apellidoAdmin, mailAdmin:mailAdmin, fechaDeCreacion:diaHoy()}));

        volverInvisible("formularioNuevoAdmin");
        volverVisible("mensajeSeAgregoAdmin");

        GuardarJSON("listaAdmin",cuentasAdmin);
        
    }

}


let botonAceptarNuevoAdmin = document.getElementById("btnAceptarAgregarAdmin");
botonAceptarNuevoAdmin.onclick = () => {

    nuevoMensaje = document.getElementById("mensajeBienvenida");
    nuevoMensaje.innerText = "Opciones";


    volverInvisible("mensajeSeAgregoAdmin");
    volverVisible("bienvenidaAdmin");

}

//FIN FUNCION AGREGAR ADMIN

//FUNCION BORRAR ADMIN

let botonBorrarAdmin = document.getElementById("btnBorrarAdmin");
botonBorrarAdmin.onclick = () => {


    volverInvisible("bienvenidaAdmin");
    volverVisible("borrarAdmin");


}

let botonConfirmarBorrarAdmin = document.getElementById("btnConfirmarBorrarAdmin");
botonConfirmarBorrarAdmin.onclick = () => {

    let nombreAdminBorrar = document.getElementById("borrarAdminIngresado").value;

    const indexAdmin = sacarIndexArrayCuentasAdmin(nombreAdminBorrar);

    if (indexAdmin < 0) {

        mensajeCartelError("El admin no existe");


    } else {

        cuentasAdmin.splice(indexAdmin, 1);
        volverInvisible("borrarAdmin");
        volverVisible("mensajeBorrarAdmin");

    }

    let botonAceptarBorrarAdmin = document.getElementById("btnAceptarBorrarAdmin");
    botonAceptarBorrarAdmin.onclick = () => {

        nuevoMensaje = document.getElementById("mensajeBienvenida");
        nuevoMensaje.innerText = "Opciones";

        volverInvisible("mensajeBorrarAdmin");
        volverVisible("bienvenidaAdmin");

    }


}

//FIN FUNCION BORRAR ADMIN

//FUNCION BUSCAR CLIENTE

let botonBuscarCliente = document.getElementById("btnBuscarCliente");
botonBuscarCliente.onclick = () =>{


    mensajeCartelError("Funcion en desarrollo");


}

//FIN FUNCION BUSCAR CLIENTE