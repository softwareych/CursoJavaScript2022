let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng:-118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hul'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'malibu, california'
    },
    'ultima-pelicula': 'Infinity War'
};//las llaves se asocian a un objeto

console.log(personaje);//ojo se muestra alfabeticamente no en el orden que defino ya que asi se decidió en la convección
console.log('Nombre: ', personaje.nombre);
console.log('Nombre: ', personaje['nombre']);
console.log('Edad: ', personaje['edad']);

//los subarreglos
console.log('Coors: ', personaje.coords);
console.log('Lat: ', personaje.coords.lat);

//contando
console.log('nro trajes: ', personaje.trajes.length );
console.log('ultimo traje: ', personaje.trajes.length -1);

const x = 'vivo';
console.log('Vivo: ', personaje[x]);

console.log('Ultima pelicula: ', personaje['ultima-pelicula']);//no se puede poner el punto

delete personaje.edad;//elimina esa propiedad
console.log(personaje);

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

personaje.casado = true;//agrego nuevo atributo y valor... 
console.log(personaje);

//para que no permita agregar o eliminar atributos ni sus valores, lo congela en el momento, pero si a sus subobjetos
Object.freeze(personaje);

personaje.dinero = 100000;//no lo hace
personaje.casado= false;//no lo hace
personaje.direccion.ubicacion='Costa Rica';//si lo hace pq es un subobjeto
console.log(personaje);

const propiedades= Object.getOwnPropertyNames(personaje);
console.log({propiedades});

const valores = Object.values(personaje);
console.log({propiedades, valores});