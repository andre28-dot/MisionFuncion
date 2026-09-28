/* Reto 2 · Configuración · El descuento habitual · 8 minutos
Una librería de San Miguel aplica normalmente un 10 % de descuento, pero puede utilizar otro porcentaje. 
Construyan una función
 que devuelva el precio final. Debe aceptar también un descuento explícito de 0 %. */

 function calcularPrecioFinal(precio: number, descuento:number =10): number {
    if (descuento < 0 || descuento > 100) {
        throw new Error("El descuento debe estar entre 0 y 100");
    }
    const precioFinal = precio - (precio * descuento / 100);
    return precioFinal;
}

console.log(calcularPrecioFinal(100)); // 90
console.log(calcularPrecioFinal(100, 20)); // 80
console.log(calcularPrecioFinal(100, 0)); // 100

/* ¿Por qué omitir el porcentaje y enviar 0 deben producir resultados diferentes? Omitir el porcentaje significa usar el valor por defecto (10), 
mientras que enviar 0 significa aplicar un descuento del 0% */