function router (requirements, answer){
const url = requirements.url
const options = {"Content-Type": "text/plain"}
switch (url) {
    case "/":
        answer
        //a la respuesta
        .writeHead(200, options)
        //le estoy configurando los encabezamientos con el codigo de estado y las opciones de configuracion de la solicitud
        .end("CODER API CONNECTED")
        //y el envio de la data solicitada (que en este caso es la "landing" de mi servidor)
        break;

    default:
        answer
        .writeHead(404, options)
        .end("ENDPOINT NOT FOUND")
        break;
}
}

export default router;