// Selección de elementos
const botonesAgregar = document.querySelectorAll(".cta"); // Botones "Agregar"
const contador = document.getElementById("contador"); // Contador en el menú
const botonReset = document.getElementById("reset"); // Botón Reset
const botonComprar = document.getElementById("comprar"); // Botón Comprar

// Inicializamos el total
let total = 0;

// Función para actualizar el contador
function actualizarContador(nuevoTotal) {
    contador.textContent = `Total: $${nuevoTotal}`;
}

// Escuchar clicks en los botones "Agregar"
botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", () => {
        // Obtener el precio del producto
        const precioTexto = boton.parentElement.querySelector(".price p").textContent.trim();
        const precio = parseFloat(precioTexto.replace(",", "."));
        
        // Sumar al total
        total += precio;
        actualizarContador(total);
    });
});

// Escuchar click en el botón "Reset"
botonReset.addEventListener("click", () => {
    total = 0; // Reiniciamos el total
    actualizarContador(total);
});

// Escuchar click en el botón "Comprar"
botonComprar.addEventListener("click", () => {
    if (total > 0) {
        // Mostrar mensaje con el total gastado
        alert(`¡Gracias por comprar en nuestra página! Has gastado un total de $${total.toFixed(2)}.`);
    } else {
        alert("No has agregado productos al carrito.");
    }

    // Resetear el contador
    total = 0;
    actualizarContador(total);
});
