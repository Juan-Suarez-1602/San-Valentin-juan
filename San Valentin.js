let contadorNo = 0;
let intervalId;

const gifsSi = [
    "https://media1.tenor.com/images/eb7a9acf570c8588e6065e138b1d4639/tenor.gif?itemid=12496349",
    "https://i.pinimg.com/originals/f6/a5/f7/f6a5f7ddff1f05cbcc560256b9f98c2e.gif",
    "https://media1.tenor.com/m/dQgEllasnCAAAAAC/kitties-anime-cuddle.gif",
    "https://media1.tenor.com/m/gFADpgmGZhwAAAAC/cats-kittens.gif",
    "https://media1.tenor.com/m/iTA60rrnw5QAAAAC/ily-ana.gif"
];

const gifsNo = [
    "https://i.pinimg.com/originals/f6/52/29/f65229ab2ef487fd36c2d445d0932e03.gif",
    "https://media1.tenor.com/m/2m_3VHJrzekAAAAC/what-whatcat.gif",
    "https://media.giphy.com/media/13borq7Zo2kulO/giphy.gif",
    "https://media1.tenor.com/m/u0rjMgkCe7gAAAAC/asd.gif"
];

function cambiarGif(gifs) {
    const img = document.querySelector("img");
    const gifIndex = Math.floor(Math.random() * gifs.length);
    img.src = gifs[gifIndex];
}

function respuestaSi() {
    const respuestaSi = document.getElementById("respuestaSi");
    const respuestaNo = document.getElementById("respuestaNo");
    respuestaSi.textContent = "";
    respuestaNo.textContent = "";

    const botonSi = document.querySelector(".yes");
    botonSi.style.width = "";
    botonSi.style.height = "";

    let mensajes = [
        "Ya sabia que iba a decir que si 😊",
        "Bueno, cuando salimos?",
        "Quedo muy cutre?",
    ];

    clearInterval(intervalId);
    intervalId = setInterval(() => {
        if (mensajes.length > 0) {
            const mensajeIndex = Math.floor(Math.random() * mensajes.length);
            respuestaSi.textContent = mensajes[mensajeIndex];
            mensajes.splice(mensajeIndex, 1);
        } else {
            clearInterval(intervalId);
        }
    }, 1000);

    cambiarGif(gifsSi);
}

function respuestaNo() {
    contadorNo++;
    const respuestaSi = document.getElementById("respuestaSi");
    const respuestaNo = document.getElementById("respuestaNo");
    respuestaSi.textContent = "";
    respuestaNo.textContent = "";

    const botonSi = document.querySelector(".yes");
    const currentWidth = botonSi.offsetWidth;
    const currentHeight = botonSi.offsetHeight;
    botonSi.style.width = currentWidth * 1.5 + "px";
    botonSi.style.height = currentHeight * 1.5 + "px";

    if (contadorNo % 3 == 0) {
        if (contadorNo == 3) {
            respuestaNo.textContent = "¿Por qué le sigue dando acaso no quiere?";
        } else if (contadorNo == 6) {
            respuestaNo.textContent = "Ya sabia tranquila :(";
        } else if (contadorNo == 9) {
            respuestaNo.textContent = "Uy esta bien :(";
        } else if (contadorNo == 12) {
            respuestaNo.textContent = "Ya no le vuelvo a preguntar :(";
        }
    } else {
        const botonNo = document.querySelector(".no");
        botonNo.style.position = "absolute";
        botonNo.style.left = Math.random() * (window.innerWidth - botonNo.offsetWidth) + "px";
        botonNo.style.top = Math.random() * (window.innerHeight - botonNo.offsetHeight) + "px";
    }

    cambiarGif(gifsNo);
}