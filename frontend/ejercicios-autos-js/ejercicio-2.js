// 2) Un día entro Genaro a comprar un auto, y le solicito a Jorge que le muestre que autos tiene disponibles que sean de 4 o menos puertas
//         -Crear una función que reciba por parametros
//             a) el listado de autos disponibles
//             b) la cantidad de puertas requeridas por parámetros.
//         -Verificar que vehículos cumplen la condición de puertas requeridas.
//         -Ejecutar la función, devolviendo el resultado a una nueva lista llamada autosPuertaGenaro. Utilizaremos el método map() para recorrer el array de autosDisponibles y devolver una nueva lista con los autos que cumplen la condición.
//         -Imprimir autosPuertaGenaro utilizando la funcion del punto (1).

const autosDisponibles = [
    {marca: 'Chevrolet', modelo: 'Camaro', puertas: 2},
    {marca: 'Chevrolet', modelo: 'Cruze', puertas: 4},
    {marca: 'Ford', modelo: 'Fiesta', puertas: 4},
    {marca: 'Ford', modelo: 'Focus', puertas: 4},
    {marca: 'Ford', modelo: 'Mustang', puertas: 4},
    {marca: 'Ford', modelo: 'Fusion', puertas: 4},
    {marca: 'Ford', modelo: 'Ka', puertas: 2},
    {marca: 'Audi', modelo: 'A4', puertas: 5},
    {marca: 'Audi', modelo: 'A5', puertas: 5},
    {marca: 'Audi', modelo: 'A6', puertas: 5},
    {marca: 'Audi', modelo: 'A7', puertas: 5},
    {marca: 'Audi', modelo: 'A8', puertas: 5},
    {marca: 'Audi', modelo: 'Q5', puertas: 5},
    {marca: 'BMW', modelo: 'Serie 3', puertas: 5},
    {marca: 'BMW', modelo: 'Serie 5', puertas: 5},
    {marca: 'BMW', modelo: 'Serie 7', puertas: 5},
    {marca: 'Mercedes Benz', modelo: 'Clase A', puertas: 5},
    {marca: 'Mercedes Benz', modelo: 'Clase C', puertas: 5},
    {marca: 'Mercedes Benz', modelo: 'Clase E', puertas: 5},
];

const autosPuertaGenaro = autosDisponibles.map(element => {
    if(element.puertas <=4)
    console.log('TENEMOS DISPONIBLES EL AUTO - MODELO:',element.modelo,' --> ', ' MARCA:',element.marca)
    return element.puertas <= 4 ;
})

console.log('La cantidad de autos con 4 o menos puertas son:', autosPuertaGenaro)