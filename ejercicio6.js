//Función 1: Intenta duplicar un número primitivo.
function intentarDuplicar(numero) {
    numero = numero * 2; // esta es la reasignación interna del parámetro local
}
//Función 2: Modifica la propiedad de un objeto
function cambiarPrecio(producto, nuevoPrecio) {
    producto.precio = nuevoPrecio; // aca la mutación directa de la propiedad del objeto
}
//pruebas requeridas
//numero 1
let edad = 20;
console.log("--- PRUEBA 1: TIPO PRIMITIVO ---");
console.log(`Antes de la función: ${edad}`);
intentarDuplicar(edad);
console.log(`Después de la función: ${edad}`);
//numero 2
const laptop = { nombre: "Laptop HP", precio: 650.00 };
console.log("\n--- PRUEBA 2: OBJETO REFERENCIADO ---");
console.log(`Precio antes de la función: $${laptop.precio}`);
cambiarPrecio(laptop, 500.00);
console.log(`Precio después de la función: $${laptop.precio}`);
export {};
