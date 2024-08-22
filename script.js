
/* Creación de variables */
const textArea = document.querySelector(".text-area");  /* Captura lo que el usuario ingresa en la caja de texto */
const mensaje = document.querySelector(".mensaje");
const themeToggleCheckbox = document.querySelector("#theme-checkbox");

/* Función para encriptar */
function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";  /* Limpia la caja después que el usuario escriba */
    mensaje.style.backgroundImage = "none";  // Quita la imagen cuando aparece el texto encriptado
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

/* Función para desencriptar */
function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";  /* Limpia la caja después que el usuario escriba */
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

/* Función para el cambio de tema */
themeToggleCheckbox.addEventListener("change", () => {
    document.documentElement.classList.toggle("dark", themeToggleCheckbox.checked);
    localStorage.setItem("theme", themeToggleCheckbox.checked ? "dark" : "light");
});

/* Establecer el tema inicial basado en localStorage */
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        themeToggleCheckbox.checked = true;
        document.documentElement.classList.add("dark");
    }
});

document.getElementById("btnCopiar").addEventListener("click", function() {
    // Obtener el contenido del área de texto
    const textarea = document.getElementById("mensajeTexto");
    
    // Seleccionar el texto
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Para móviles

    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(textarea.value).then(function() {
        alert("Texto copiado: " + textarea.value);
    }, function(err) {
        console.error("Error al copiar el texto: ", err);
    });
});
