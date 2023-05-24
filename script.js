/*Las "llaves" de encriptación que utilizaremos son las siguientes:
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

//Declaramos variables y asignamos les elementos traidos del docuement
const textAreaEncriptar=document.querySelector(".text-area-principal");
const textAreaEncriptado=document.querySelector(".text-area-mensaje");
const botonCopiar=document.getElementById("btnCopiar");
const anuncio = document.getElementById("anuncio");
const botonMensajeCopiado = document.getElementById("text-copiado");


//Creamos funcion para el boton Encriptar
function btnEncriptar() {
    //Llamamos la funcion para encriptar
    const textoEncriptado = encriptar(textAreaEncriptar.value);
    textAreaEncriptado.value = textoEncriptado;
    //Limpiamos el textarea principal y ocultamos el background y el anuncio del textarea de mensaje
    textAreaEncriptar.value = "";
    textAreaEncriptado.style.backgroundImage = "none";
    anuncio.style.visibility = "hidden";
    botonCopiar.style.visibility = "visible";
}

//Funcion que ejecua el encriptado
function encriptar(stringAEncriptar) {
    //Declaramos una array conl as llaves de encriptacion
    //let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"], ["é", "énter"], ["í", "ímes"], ["á", "ái"], ["ó", "óber"], ["ú", "úfat"]];

    //Nos aseguramos que toda la cadena ingresada se reciba en minisculas
    stringAEncriptar = stringAEncriptar.toLowerCase();

    //Recorremos el array en busca de coincidencias y reemplazamos las cincidencias encontradas
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringAEncriptar.includes(matrizCodigo[i][0])) {
            stringAEncriptar = stringAEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);     
        }             
    }
    return stringAEncriptar;
}

//Funcion que ejecuta el desencriptado
function btnDesencriptar() {
    //Llamamos la funcion desencriptar
    const textoDesencriptado = desencriptar(textAreaEncriptar.value);
    textAreaEncriptado.value = textoDesencriptado;
    //Limpiamos el textarea principal y ocultamos el background y el anuncio del textarea de mensaje
    textAreaEncriptar.value = "";
    textAreaEncriptado.style.backgroundImage = "none";    
}


function desencriptar(stringEncriptado) {
    //Declaramos una array conl as llaves de encriptacion
    //let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"], ["é", "énter"], ["í", "ímes"], ["á", "ái"], ["ó", "óber"], ["ú", "úfat"]];
    //Nos aseguramos que toda la cadena ingresada se reciba en minisculas
    stringEncriptado = stringEncriptado.toLowerCase();

    //Recorremos el array en busca de coincidencias y reemplazamos las cincidencias encontradas
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][1])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
        
    }
    return stringEncriptado; 
}

function ocultarBtnCopiar(){
    botonCopiar.style.visibility = "hidden";    
}


ocultarBtnCopiar();
   

function copiarTexto() {
    navigator.clipboard.writeText(textAreaEncriptado.value)
.then(() => { 
    console.log('texto copiado al portapapeles')  

})
.catch(Error => {
    console.log('error al copiar texto copiado al portapapeles', Error)
})
    
}






