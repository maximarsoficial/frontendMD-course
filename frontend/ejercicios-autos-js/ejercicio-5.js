// 5) Jorge necesita tener su listado actualizado.
// - Crear una función que reciba el listado de autos original (autosDisponibles) y filtre el autoComprado que compro Genaro, devolviendo un nuevo array sin ese auto. Podemos utilizar el método que querramos.
// - Imprimir en pantalla el nuevo listado de autos utilizando la función del punto (1).


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

console.log('----------------------------------------------------------------------') 
console.log('LISTA ACTUALIZADA DE NUESTROS AUTOS DISPONIBLES - 2021:') 

const autosActualizados = autosDisponibles.filter(index => {
    if(index.modelo != 'Mustang')
    console.log('MARCA:',index.marca,' --> ','MODELO:',index.modelo,' --> '  , 'CANTIDAD DE PUERTAS',index.puertas)
 
})