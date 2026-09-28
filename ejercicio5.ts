/* Construyan identidad<T> para devolver el mismo dato recibido. 
Compruébenla con un código numérico y con el nombre de un departamento. No utilicen any */

function identidad<T>(dato: T): T {
    return dato;
}

console.log(identidad(42)); // 42
console.log(identidad("San Vicente")); // "San Vicente"

/*¿ Qué relación establece T entre la entrada y la salida? */
// T establece que el tipo de dato de entrada será el mismo que el de salida, 
// lo que permite mantener la tipificación fuerte durante la ejecución.
