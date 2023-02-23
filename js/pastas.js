let recetasPastas = []

let pastas = [
    {
        id: 1,
        nombrePasta: "Gnocchi tricolor",
        vegetariana: true,
        dificultad: "baja",
        img: "https://4.bp.blogspot.com/-3s78bQ0DLcI/WBcvmSwhZ9I/AAAAAAAALOo/SlagzMHYB5EqvsfsV2jkkSG7sJvCtp3JACLcB/s640/IMG_20161028_141956copia.jpg",

    },
    {
        id: 2,
        nombrePasta: "Spaghetti con ostras",
        vegetariana: false,
        dificultad: "media",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/15/e6/d2/e0/spaghetti-con-ostras.jpg",
    },
    {
        id: 3,
        nombrePasta: "Penne rigatti Spicy",
        vegetariana: true,
        dificultad: "media",
        img: "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2019/10/Penne-Arrabbiata-Recipe1.jpg",

    },
    {
        id: 4,
        nombrePasta: "Las cintas de pulpo",
        vegetariana: false,
        dificultad: "alta",
        img: "https://www.elreydelpulpo.com/wp-content/uploads/2019/03/portada-comer-pescado.jpg",
    },
    {
        id: 5,
        nombrePasta: "Rigatoni con hongos",
        vegetariana: true,
        dificultad: "baja",
        img: "https://periodicodelpilar.medios.digital/download/multimedia.normal.80ba9bee63a52baa.494d475f333930395f6e6f726d616c2e6a7067.jpg",

    },
]

let html = ""

pastas.forEach(pastas => {
    const classCard = pastas.vegetariana ? "whiteCard" : "greenCard"
    html += `<section>
        <div class=${classCard} > 
            <img src=${pastas.img} class="img" />
            <ul>
                <li>
                    <p >
                        <b>
                            ${pastas.nombrePasta}
                        </b>
                    </p>
                </li>
                <li>
                    <p>
                        Dificultad
                        <b>
                            ${pastas.dificultad}
                        </b>
                    </p>
                </li>
            </ul>
            
            <button id=${pastas.id} class="button" type="button" class="btn btn-success"onclick=agregarRecetaFavorita(${pastas.id})>Agregar a mis recetas favoritas</button>
            <button id=${pastas.id} class="button" type="button" class="btn btn-success"onclick=sacarRecetaFavorita(${pastas.id})>Sacar de mis recetas favoritas</button>
            
        </div>
        </section>
`

})



document.getElementById("container1").innerHTML = html

function agregarRecetaFavorita(idAgregarFav) {

    let recetasFav = pastas.find(pastas => pastas.id === idAgregarFav)
    recetasPastas.push(recetasFav)
    localStorage.setItem("lista", JSON.stringify(recetasPastas))

    swal("Entre tus pastas favoritas está:" + recetasFav.nombrePasta)
    console.log(recetasPastas)
    console.log("Entre tus pastas favoritas está:", idAgregarFav)
}

function sacarRecetaFavorita(idSacarFav) {

    let recetasFav = pastas.find(pastas => pastas.id === idSacarFav)
    recetasPastas.push(recetasFav)
    localStorage.setItem("lista", JSON.stringify(recetasPastas))

    swal("Entre tus pastas favoritas ya no está:" + recetasFav.nombrePasta)



    console.log("Entre tus pastas favoritas ya no está:", idSacarFav)

}

