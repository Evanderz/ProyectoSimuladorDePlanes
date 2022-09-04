
    const dolar = async () => {

        const respuesta = await fetch(`https://api-dolar-argentina.herokuapp.com/api/all`)
        const data = await respuesta.json()

        let listaDelPrecioDolar = document.createElement("ul")
        listaDelPrecioDolar.className = "dropdown-menu bg-dark ancho"
        listaDelPrecioDolar.innerHTML = `<li class="textoBlanco m-2"><a>${data.valores.valores_principales.casa310.nombre._text}:</a></li>
                                            <ul>
                                            <li class="textoBlanco"><a>Compra: $${data.valores.valores_principales.casa310.compra._text}</a></li>
                                            <li class="textoBlanco"><a>Venta: $${data.valores.valores_principales.casa310.venta._text}</a></li>
                                            </ul>
                                        <li class="textoBlanco m-2"><a>${data.valores.valores_principales.casa312.nombre._text}:</a></li>
                                            <ul>
                                            <li class="textoBlanco"><a>Compra: $${data.valores.valores_principales.casa312.compra._text}</a></li>
                                            <li class="textoBlanco"><a>Venta: $${data.valores.valores_principales.casa312.venta._text}</a></li>
                                            </ul>  
                                        <li class="textoBlanco m-2"><a>${data.valores.valores_principales.casa313.nombre._text}:</a></li>
                                            <ul>
                                            <li class="textoBlanco"><a>Compra: $${data.valores.valores_principales.casa313.compra._text}</a></li>
                                            <li class="textoBlanco"><a>Venta: $${data.valores.valores_principales.casa313.venta._text}</a></li>
                                            </ul>  
                                        <li class="textoBlanco m-2"><a>${data.valores.valores_principales.casa349.nombre._text}:</a></li>
                                            <ul>
                                            <li class="textoBlanco"><a>Compra: $${data.valores.valores_principales.casa349.compra._text}</a></li>
                                            <li class="textoBlanco"><a>Venta: $${data.valores.valores_principales.casa349.venta._text}</a></li>
                                            </ul> 
                                        <li class="textoBlanco m-2"><a>${data.valores.valores_principales.casa406.nombre._text}:</a></li>
                                            <ul>
                                            <li class="textoBlanco"><a>Venta: $${data.valores.valores_principales.casa406.venta._text}</a></li>
                                            </ul>      `
                                            
        divPrecioDolar.appendChild(listaDelPrecioDolar);
    }

    dolar();


    
    const cryptoMonedas = async () => {

        const respuesta = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=ars&order=market_cap_desc&per_page=10&page=1&sparkline=false
        `)
        const data = await respuesta.json()

        
        let listaDelPrecioCryptos = document.createElement("ul")
        listaDelPrecioCryptos.className = "dropdown-menu bg-dark ancho"

        data.forEach((elemento) => {
            listaDelPrecioCryptos.innerHTML +=`<li class="textoBlanco m-2"><a><img class="tamañoIcono" src=${elemento.image}> ${elemento.name}: $${elemento.current_price}  </a></li>`
            
        });
        divPrecioCryptos.appendChild(listaDelPrecioCryptos);

        console.log(data);

    }

    cryptoMonedas();
