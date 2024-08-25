// Seleccionar el input por su id
const miInput = document.getElementById("input");

// Guardar el borde original del input
const bordeOriginal = miInput.style.border 

//Ccuando esta enfocado
miInput.addEventListener("focus", function() {
    miInput.style.border = "2px solid red"; // Cambia el borde a rojo
});

// Restaurar el color
miInput.addEventListener("blur", function() {
    miInput.style.border = bordeOriginal;
});