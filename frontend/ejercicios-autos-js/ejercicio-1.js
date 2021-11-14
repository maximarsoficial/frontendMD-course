
    // 1) Jorge tiene una concesionaria de autos, y desea mostrar en su página web el listado de autos que tiene disponibles.
    //     - Crear una función que tome un listado de autos e imprima por consola el modelo y la marca de *cada auto* con la leyenda `Tenemos disponible un ${modelo}`. Utilizar el método `for` o `forEach` para recorrer el array.
    //     - Ejecutar dicha función pasando por parámetros el array autosDisponibles.

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

   autosDisponibles.forEach(element => {
    console.log('TENEMOS DISPONIBLES EL AUTO - MODELO:',element.modelo,' --> ', ' MARCA:',element.marca)
   });

 