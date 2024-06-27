
//ctes
const textoEntrada = document.querySelector(".entrada-text");
const parrafoSalida = document.querySelector(".texto-salida");
const imagenP = document.querySelector("img");
const msjAlerta = document.querySelector(".msj-alerta");
const buttonCopiar = document.getElementById("copiar");
const buttonEncript = document.getElementById("encriptar");
const buttonDesencript = document.getElementById("desencriptar");


//Challenge oracle llaves
const letra_e = "enter";
const letra_i = "imes";
const letra_a = "ai";
const letra_o = "ober";
const letra_u = "ufat";


function mostrarEncriptacion() {    
    parrafoSalida.removeAttribute("hidden");
    imagenP.setAttribute("hidden", true);
    msjAlerta.setAttribute("hidden", true);
    buttonCopiar.removeAttribute("hidden");      
    parrafoSalida.innerText = `${encriptacion()}`;
    if (parrafoSalida.innerText == '') {
        ocultarSalida();
    }
    textoEntrada.value = "";

}

function mostrarDesencriptacion() {
    parrafoSalida.removeAttribute("hidden");
    imagenP.setAttribute("hidden", true);
    msjAlerta.setAttribute("hidden", true);
    buttonCopiar.removeAttribute("hidden");      
    parrafoSalida.innerText = `${desencriptacion()}`;
    if (parrafoSalida.innerText == '') {
        ocultarSalida();
    }
    textoEntrada.value = "";


}

function ocultarSalida() {
    parrafoSalida.setAttribute("hidden",true);
    imagenP.removeAttribute("hidden");
    msjAlerta.removeAttribute("hidden") ;
    buttonCopiar.setAttribute("hidden",true) ;  
    parrafoSalida.innerText = '';

}



function encriptacion() {
    let textoConversion = textoEntrada.value;
    textoConversion = textoConversion.replace(/[^a-z\s]/g, ''); 
    textoConversion = textoConversion.replace(/e/g,letra_e);
    textoConversion = textoConversion.replace(/i/g,letra_i);
    textoConversion = textoConversion.replace(/a/g,letra_a);
    textoConversion = textoConversion.replace(/o/g,letra_o);
    textoConversion = textoConversion.replace(/u/g,letra_u);
    return textoConversion;
}

function desencriptacion() {
    let textoConversion = textoEntrada.value;
    textoConversion = textoConversion.replace(/[^a-z\s]/g, ''); 
    textoConversion = textoConversion.replace(/enter/g,"e");
    textoConversion = textoConversion.replace(/imes/g,"i");
    textoConversion = textoConversion.replace(/ai/g,"a");
    textoConversion = textoConversion.replace(/ober/g,"o");
    textoConversion = textoConversion.replace(/ufat/g,"u");    
    return textoConversion;
}

buttonEncript.addEventListener("click", mostrarEncriptacion);
buttonDesencript.addEventListener("click", mostrarDesencriptacion);

buttonCopiar.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(parrafoSalida.innerText);
      console.log('Texto copiado al portapapeles con éxito.');
      
    } catch (err) {
      console.error('Error al copiar texto al portapapeles: ', err);
    }
  });