let juegos = ['zelda','mario','otro', 'hOla','chao'];
console.log('largo: ', juegos.length);

let ultimo = juegos[juegos.lenght -1];

console.log({ultimo});

juegos.forEach((elemento, indice,arr) => {

  console.log({elemento, indice,arr}) ; 
});

let nuevaLongitud = juegos.push('inserta al final');//agrega nuevo elemento
console.log({ nuevaLongitud, juegos});

juegos.unshift('inserta al principio');
console.log({ nuevaLongitud, juegos});

let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos});

let pos = 1;

console.log( { juegos } );

console.log(  juegos  );

let juegosBorrados = juegos.splice( pos, 2); //desde la posición borro 2 elementos
console.log({ juegosBorrados, juegos});

let metroidIndex = juegos.indexOf('hOla');//es casesensitive
console.log({metroidIndex});

