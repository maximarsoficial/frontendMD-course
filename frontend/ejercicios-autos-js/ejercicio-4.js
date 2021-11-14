// 4) Genaro decidió comprar un Mustang
//         - Tomar el listado de autos que cumplen la condición N°3 (autosMarcaPuertaGenaro) y devolver un objeto llamado autoComprado. Utilizaremos el método filter sobre la propiedad modelo. Es obligatorio utilizar una comparación estricta (===) para que el objeto sea el que cumpla la condición.
//         - Imprimir por pantalla el objeto autoComprado, con la leyenda `Felicitaciones Genaro por haber adquirido tu nuevo y flamante ${autoComprado.marca} ${autoComprado.modelo} que disfrutes tus ${autoComprado.puertas} puertas`.


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

console.log('-------------------------$$$$$$$$$$$$$$$$----------------------------------------------') 
console.log(' --> FELICITACIONES SEÑOR GENARO POR HABER ADQUIRIDO SU NUEVO Y FLAMANTE AUTO:') 

const autoComprado = autosDisponibles.filter(index => {
    if(index.modelo === 'Mustang')
    console.log(index.marca,' --> ','MODELO:',index.modelo,' --> '  , 'que disfrutes de tus',index.puertas ,'puertas')
 
})
console.log('--------------------------$$$$$$$$$$$$$$$$---------------------------------------------') 