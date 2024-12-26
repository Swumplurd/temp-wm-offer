const filterWalmartOffer = (offer) => {
    const contenidoJsonElement =
                    document.getElementById("contenido-json");
                    contenidoJsonElement.innerHTML = null
    fetch("./canales.json") /* Aquí se consume el json */
        .then((response) => response.json())
        .then((data) => {
            // Accede a los datos del JSON
            const categorias = data.categorias;
            // Genera el contenido dinámicamente
            categorias.forEach((categoria) => {
                const nombre = categoria.nombre;
                const canales = categoria.canales;
                let numeroCanales = 0
                categoria.canales.forEach(canal => canal.paquetesWalmart.includes(offer) ? numeroCanales+=1 : numeroCanales+=0);
                if(numeroCanales === 0) return;

                // Crea elementos HTML para mostrar la información
                const categoriaElement = document.createElement("div");
                categoriaElement.classList.add("card");
                categoriaElement.innerHTML = `
            <div class="card-header cardHead-ModalExt">
                <button class="btn btn-link btn-block text-left d-flex align-items-center justify-content-between" type="button" data-toggle="collapse" data-target="#collapse-es-${nombre}" aria-expanded="true" aria-controls="collapse-es-${nombre}" style="text-decoration: none;">
                ${nombre}
                <div class="d-flex">
                    <p class="modal-channels mx-4 mt-1">${numeroCanales} Canales</p>
                    <img class="" src="https://d58ohtx80p2sd.cloudfront.net/streaming-mvs/paquetes/img/arrow_down.svg" alt="">
                </div>
                </button>
            </div>
            
            <div id="collapse-es-${nombre}" class="collapse card-body scroll-div p-0" aria-labelledby="heading4" data-parent="#accordionExample">
                <div class="col-12 d-flex my-1 p-0 d-flex flex-row flex-wrap">
                ${canales
                        .map(
                            (canal) =>
                                canal.paquetesWalmart.includes(offer) ? `
                    <div class="col-md-6 p-0">
                    <img class="img-channel" src="${canal.imagenPrincipal}" alt="${canal.nombreCanal}">
                    <img class="stream-modal-logo" src="${canal.imagenCanal}" alt="${canal.nombreCanal}">
                    <div id="ent-es-${canal.nombreCanal}" class="collapse channel-description">
                        <h6>${canal.nombreCanal}</h6>
                        <p>${canal.descripcion}</p>
                    </div>
                    <button class="btn btn-sinopsis" type="button" data-toggle="collapse" data-target="#ent-es-${canal.nombreCanal}" aria-expanded="false" aria-controls="ent-es-${canal.nombreCanal}">
                        Conoce más
                    </button>
                    </div>
                ` : null
                        )
                        .join("")}
                </div>
            </div>
            `;

                // Agrega la categoría al contenido
                
                contenidoJsonElement.appendChild(categoriaElement);
            });
        })
        .catch((error) => {
            console.error("Error al leer el archivo JSON:", error);
        });
}