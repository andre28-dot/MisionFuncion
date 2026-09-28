/* Reto 7 · Recursividad · La suma por partes · 8 minutos
Construyan una función recursiva que sume desde 1 hasta N. Trabajen con enteros no negativos y
prueben con 0 y 4. Identifiquen dónde se detiene y cómo se acerca a ese punto */
function sumaRecursiva(n) {
    if (n === 0) {
        return 0; // Caso base: si n es 0, la suma es 0
    }
    else {
        return n + sumaRecursiva(n - 1); // Llamada recursiva: suma n con la suma de los números anteriores
    }
}
console.log(sumaRecursiva(0)); // 0
console.log(sumaRecursiva(4)); // 10 (4 + 3 + 2 + 1 + 0)
export {};
