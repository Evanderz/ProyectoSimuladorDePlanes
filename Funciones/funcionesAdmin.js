let nombreDeCuenta;
let contraseñaAdmin;
let nombrePilaAdmin;
let apellidoAdmin;
let mailAdmin;
let indexAdmin;

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
cuentasAdmin = adminsCargados ? recorrerArray(adminsCargados,cuentasAdmin,Admin) :cuentasAdmin;
console.log(cuentasAdmin);

//SACA EL INDEX DEL ARRAY
const sacarIndexArrayCuentasAdmin = (valorBuscado) => {

    return (cuentasAdmin.map(index => index.nombreUsuario).indexOf(valorBuscado));

}


//FUNCION PARA VERIFICAR SI EL USUARIO Y LA CONTRASEÑA CON CORRECTAS
const verificarUsuarioYContraseña = () =>{


    const nombreAdmin = document.getElementById("ingresoUsuarioAdmin").value;
   

    indexAdmin = sacarIndexArrayCuentasAdmin(nombreAdmin);

    //TERNARIO
    indexAdmin < 0 ? mensajeCartelError("El nombre de usuario no existe") : verificarContraseña();

      
}

//FUNCION PARA VERIFICAR LA CONTRASEÑA
const verificarContraseña = () => {

    const contraseñaAdmin = document.getElementById("ingresoContraseñaAdmin").value;
    if(cuentasAdmin[indexAdmin].contraseñaUsuario == contraseñaAdmin)  {

        let mensajeBienvenida = document.getElementById("mensajeBienvenida");
        mensajeBienvenida.innerText = `Bienvenido \n${cuentasAdmin[indexAdmin].nombrePila} ${cuentasAdmin[indexAdmin].apellido}!`


        volverInvisible("ingresarAdmin");
        volverVisible("bienvenidaAdmin");

    } else {

        mensajeCartelError("La contraseña es incorrecta");

    }

}


//FUNCION AGREGAR ADMIN
//FUNCION PARA VALIDAR SI HAY CASILLAS EN BLANCO O SI HAY CARACTERES ESPECIALES EN EL NOMBRE Y APELLIDO
const validadorDeCaracteresAdmin = () =>{

    

    (nombreDeCuenta == "" || contraseñaAdmin == "" || nombrePilaAdmin == "" || apellidoAdmin == "" || mailAdmin == "") ? mensajeCartelError("Dejo casillas sin rellenar") : validarCaracteresEspeciales();

}   

const validarCaracteresEspeciales = () =>{

    const validador = new RegExp('^[A-Z]+$', 'i');
    //Aca usamos el validador diciendo que si .test(variable.value) es diferente a validador 
    
    if ((!validador.test(nombrePilaAdmin)) || (!validador.test(apellidoAdmin))) {

        mensajeCartelError("Ingreso caracteres incorrectos o dejo espacios en blanco");
        
    } else {

        id = (cuentasAdmin[cuentasAdmin.length - 1].idAdmin) + 1;

        cuentasAdmin.push(new Admin({idAdmin:id, nombreUsuario:nombreDeCuenta, contraseñaUsuario:contraseñaAdmin, nombrePila:nombrePilaAdmin, apellido:apellidoAdmin, mailAdmin:mailAdmin, fechaDeCreacion:diaHoy()}));

        nuevoMensaje = document.getElementById("mensajeBienvenida");
        nuevoMensaje.innerText = "Opciones";
    
        volverInvisible("formularioNuevoAdmin");
        volverVisible("bienvenidaAdmin");

        mensajeCartelConfirmado("Se agrego nuevo Admin");

        GuardarJSON("listaAdmin",cuentasAdmin);
        
    }


}



//FUNCION QUE OBTIENE LOS VALORES POR ID DE LOS DATOS INGRESADOS EN EL FORMULARIO Y LUEGO VERIFICA
const obtenerValoresDeDatosIngresadosAdmin = () =>{

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

const borrarAdmin = () =>{


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

        mensajeCartelConfirmado("Se borro el Admin");

        GuardarJSON("listaAdmin",cuentasAdmin);

    }

}


//FIN FUNCION BORRAR ADMIN

//FUNCION BUSCAR CLIENTE

let botonBuscarCliente = document.getElementById("btnBuscarCliente");
botonBuscarCliente.onclick = () =>{


    mensajeCartelError("Funcion en desarrollo");


}

//FIN FUNCION BUSCAR CLIENTE