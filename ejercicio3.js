function sumarNotas(...notas) {
    // Si el arreglo esta vacio, tiene que devolver (0)
    if (notas.length === 0) {
        return 0;
    }
    let sumaTotal = 0;
    for (const nota of notas) {
        sumaTotal += nota;
    }
    return sumaTotal;
}
//pruebas requeridas
const resultadoConNotas = sumarNotas(8.5, 9.0, 7.5, 10);
console.log(`Prueba 1 (con notas) -> Total: ${resultadoConNotas}`);
//segunda prueba requerida
const resultadoSinNotas = sumarNotas();
console.log(`Prueba 2 (sin notas) -> Total: ${resultadoSinNotas}`);
export {};
