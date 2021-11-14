// 3) A Genaro le gustaron todos los autos de Ford, y le pidió a Jorge que le muestre los autos de Ford que tiene en su listado.
//         - Refactorizar la función del punto dos para que reciba por parametros:
//             a) un array de autos
//             b) una propiedad a comparar (por ejemplo marca, puerta, modelo, etc.)
//             c) una condición a cumplir (cantidad de puertas, marca o modelo). NOTA: Se puede usar el operador ==, no es obligatorio utilizar ===.
//         - Ingresar el listado de autos que cumplen la condición N°2 (autosPuertaGenaro) y devolver un nuevo listado llamado autosMarcaPuertaGenaro.
//         - Imprimir por consola el listado de autos con la leyenda `Tenemos disponibles los autos ${marca} ${modelo} que tienen ${puertas} puertas`.


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
console.log('------------------------------------------') 
console.log('AQUI LES PRESENTAMOS SEÑOR GENARO NUESTROS AUTOS MARCA FORD DISPINIBLES') 
console.log('------------------------------------------') 
const autosPuertaGenaro = autosDisponibles.map(element => {
   
    if(element.marca === 'Ford')
    console.log(' MARCA:',element.marca,' --> ','MODELO:',element.modelo,' --> '  , 'CANTIDAD DE PUERTAS:',element.puertas)
  
    
})

console.log('------------------------------------------') 
console.log('AQUI LES PRESENTAMOS OTRAS MARCAS DISPINIBLES PERO CON MENOS DE 4 PUERTAS') 
console.log('------------------------------------------') 
const autosMarcaPuertaGenaro = autosDisponibles.map(index => {
    if(index.puertas <= 4)
    console.log(' MARCA:',index.marca,' --> ','MODELO:',index.modelo,' --> '  , 'CANTIDAD DE PUERTAS:',index.puertas)
 
})

