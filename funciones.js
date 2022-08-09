const diaHoy = mostrarFecha => {

    let diaActual = new Date();

    return `${diaActual.getDate()}/${diaActual.getMonth() + 1}/${diaActual.getFullYear()}`

}

const calculoParaSacarValorCuota = (montoPrestamo, numeroOpciones, tasaInteresAnual) => {

    return ((montoPrestamo * (tasaInteresAnual * (numeroOpciones / 12))) / 100 + montoPrestamo) / numeroOpciones

}

const mensajePlan = () => alert(`Su prestamo de $${montoPrestamo} en ${numeroOpciones} cuotas con un TNA del ${tasaInteresAnual}% le da una valor de cuota de $${parseInt(calculoParaSacarValorCuota(montoPrestamo, numeroOpciones, tasaInteresAnual))} `)
const mensajeInvalido = () => alert("Comando Invalido");

const calculoMontoCuotas = () => {

    while (validadorPlan != true) {
        numeroOpciones = prompt(`Su presupuesto es ${categoriaPresupuesto}  puede acceder a un prestamo de $${montoPrestamo} seleccione entre 12, 24, 36, 48 y 60 cuotas para ver los planes: `);
        numeroOpciones = parseInt(numeroOpciones);


        switch (numeroOpciones) {

            case 12:
                mensajePlan();
                seleccionarPlan();
                break;

            case 24:
                mensajePlan();
                seleccionarPlan();
                break;

            case 36:
                mensajePlan();
                seleccionarPlan();
                break;

            case 48:
                mensajePlan();
                seleccionarPlan();
                break;

            case 60:
                mensajePlan();
                seleccionarPlan();
                break;

            default:
                mensajeInvalido();
                break;
        }
    }

}


const seleccionarPlan = () => {


    let mailUsuario;
    let nombreUsuario;
    let apellidoUsuario;
    let telefonoUsuario;
    let validadorUsuario;
    let validadorVolver;
    let confirmarSeleccion;

    confirmarSeleccion = prompt("Ingrese 1 para seleccionar este plan, 2 para volver a elegir la cantidad de cuotas, 3 para ir al inicio o 4 para salir");

    while (validadorUsuario != "y") {

        validadorUsuario = "n";

        switch (confirmarSeleccion) {

            case "1":

                validadorVolver = prompt("Ingrese 1 para ingresar su informacion o ingrese 2 para volver al paso anterior");

                if (validadorVolver == "2") {

                    validadorUsuario = "y";

                } else if (validadorVolver == "1") {

                    alert("Por favor ingresa los sigueintes datos:")
                    nombreUsuario = prompt("Ingrese su nombre por favor");
                    apellidoUsuario = prompt("Ingrese su apellido por favor");
                    mailUsuario = prompt("Ingrese su mail por favor");
                    telefonoUsuario = prompt("Ingrese su numero de telefono por favor");

                    validadorUsuario = prompt(`Los datos ingresados son los siguiente:
                    \nNombre: ${nombreUsuario}
                    \nApellido: ${apellidoUsuario}
                    \nMail: ${mailUsuario}
                    \nTelefono: ${telefonoUsuario}
               
                    \nSi la informacion es correcta presione "y" para que en un plazo de 48hs nos comunicaremos
                    \nEn caso de querer volver a ingresar su informacion presione "n"`).toLowerCase();

                    switch (validadorUsuario) {

                        case "y":

                            alert(`Sr/Sra: ${nombreUsuario} ${apellidoUsuario} gracias por confiar en nosotros y nos comunicaremos con usted dentro de un plazo de 48hs habiles.`)

                            validadorUsuario = "y";
                            validadorPlan = 1;
                            presupuestoCliente = "ESC";

                            idUsuario = (acumuladoClientes[acumuladoClientes.length - 1].idCliente) + 1



                            break;

                        case "n":
                            validadorUsuario = "n";
                            break;

                        default:

                            mensajeInvalido();
                            validadorUsuario = "n";
                            break;
                    }
                } else {

                    mensajeInvalido();
                    validadorUsuario = "n";

                }

                break;

            case "2":

                calculoMontoCuotas();

                break;

            case "3":
                validadorPlan = true;
                validadorUsuario = "y";
                presupuestoCliente = false;
                break;

            case "4":
                validadorPlan = true;
                validadorUsuario = "y";
                presupuestoCliente = true;
                break;

            default:
                mensajeInvalido();
                validadorUsuario = "y";
                break;

        }
    }

    class DatosCliente {

        constructor(idCliente, nombreCliente, apellidoCliente, mailCliente, telefonoCliente, montoPrestamoCliente, montoCuotaCliente, cantidadCuotaCliente, estadoContactado, fechaCreacion, actualizacionFechaEstado) {

            this.idCliente = idCliente;
            this.nombreCliente = nombreCliente;
            this.apellidoCliente = apellidoCliente;
            this.mailCliente = mailCliente;
            this.telefonoCliente = telefonoCliente;
            this.montoPrestamoCliente = montoPrestamoCliente;
            this.montoCuotaCliente = montoCuotaCliente;
            this.cantidadCuotaCliente = cantidadCuotaCliente;
            this.estadoContactado = estadoContactado;
            this.fechaCreacion = fechaCreacion;
            this.actualizacionFechaEstado = actualizacionFechaEstado;
        }


    }

    acumuladoClientes.push(new DatosCliente(idUsuario, nombreUsuario, apellidoUsuario, mailUsuario, telefonoUsuario, montoPrestamo, calculoParaSacarValorCuota(montoPrestamo, numeroOpciones, tasaInteresAnual), numeroOpciones, "No contactado", diaHoy(), " "))

    console.log(acumuladoClientes);
    preguntarSiEsUsuario = true;


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

const mensajeBusqueda = (encontrandoCliente) => {

    const clienteEncontrado = encontrandoCliente;

    if (clienteEncontrado.length > 0) {

        alert(`Se encontraron ${clienteEncontrado.length} cliente/s`);


        for (const cliente of clienteEncontrado) {
            let seleccionAdministrarCliente;
            let validadorAdministrarCliente;
            validadorAdministrarCliente = false

            alert(`Id: ${cliente.idCliente}\nNombre: ${cliente.nombreCliente}\nApellido: ${cliente.apellidoCliente}\nMail: ${cliente.mailCliente}\nTelefono: ${cliente.telefonoCliente}\nMonto Total del Prestamo: ${cliente.montoPrestamoCliente}\nMonto de la cuota: ${cliente.montoCuotaCliente}\nCantidad de cuotas: ${cliente.cantidadCuotaCliente}\nFecha de creacion: ${cliente.fechaCreacion}\nEstado de contaco: ${cliente.estadoContactado}\nUltima actualizacion del estado: ${cliente.actualizacionFechaEstado}`);

            while (validadorAdministrarCliente != true) {
                seleccionAdministrarCliente = prompt(`Ingrese el numero con la opcion que desee utilizar:\n1:Pasar al siguiente cliente\n2:Marcar cliente como Contactado\n3:Borrar Cliente`)
                numeroIndex = (acumuladoClientes.map(index => index.idCliente).indexOf(cliente.idCliente))

                switch (seleccionAdministrarCliente) {

                    case "1":

                        validadorAdministrarCliente = true;
                        break;

                    case "2":

                        acumuladoClientes[numeroIndex].estadoContactado = "Contactado"
                        acumuladoClientes[numeroIndex].actualizacionFechaEstado = diaHoy();
                        validadorAdministrarCliente = true;
                        alert("Estado cambiado a contactado.")
                        console.log(acumuladoClientes);


                        break;

                    case "3":

                        acumuladoClientes.splice(numeroIndex, 1);
                        alert("Cliente borrado");
                        validadorAdministrarCliente = true;

                        break;


                    default:
                        mensajeInvalido();

                }
            }


        }

        alert("No hay mas clientes");

        ingresarDatoCliente = prompt("Ingrese 1 para ingresar otro dato del cliente o 2 para Salir");

        if (ingresarDatoCliente == "2") {

            ingresarDatoCliente = true;
            preguntarSiEsUsuario = true;

        }else{

            ingresarDatoCliente = false;

        }
    } else {

        alert("No se encontro ningun cliente, intentelo de nuevo")
        ingresarDatoCliente = false;

    }
}