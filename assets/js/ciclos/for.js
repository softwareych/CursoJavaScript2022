const heroes = ['Batman','superman','aquaman','otro'];

console.warn('For Tradicional');

for(let i=0 ; i< heroes.length;i++ ){
    console.log(heroes[i]);
}

console.warn('For in');

for(let i in heroes){//es lo mismo que el de arriba
    console.log(heroes[i]);
}

console.warn('For of');

for(let heroe of heroes){//es lo mismo que el de arriba, no es comun poner la i sino colocar el nombre del arreglo pero en singular
    console.log(heroe);
}