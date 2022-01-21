let a=5;

if (a>10){
    console.log('A es mayor a 10');
}else {
    console.log('A es menor a 10');
}

const hoy = new Date();

console.log(hoy);

let dia = hoy.getDay();
console.log({dia});

if (dia === 0){  //el triple igual compara no solo el valor sino también el tipo de dato
  console.log('Domingo');  
}else{
    console.log('No es Domingo');
}

//= es una asignación
//== compara solo el valor de las variables, sin importar el tipo de dato
//=== compara el valor y el tipo de dato, deben ser identicos
console.log(dia === 0);//da false

//if anidados

if (dia === 0){  //el triple igual compara no solo el valor sino también el tipo de dato
    console.log('Domingo');  
}else if (dia === 1){
    console.log('Lunes'); 
}else if (dia === 2){
    console.log('Martes'); 
}else{
      console.log('No es L, M ni Domingo');
  }


  //sin usar if ni switch, solo objetos
  dia = 3;

  const diasLetras = {
      0: 'Domingo',
      1: 'Lunes',
      2: 'Martes',
      3: 'Miércoles'
  }

  console.log(diasLetras[dia]);//regeesaría miercoles

  //si se coloca un valor no definido en la constante se puede hacer esto
  dia = 4;
  console.log(diasLetras[dia] || 'Día no definido');//operador or ||

  //otra forma
  dia = 2;
  const diasLetras2 = {
    0: ()=> 'Domingo - 0',
    1: ()=> 'Lunes - 1',
    2: ()=> 'Martes - 2',
    3: ()=> 'Miércoles - 3'
}

console.log(diasLetras2[dia]);
console.log( diasLetras2[dia]() );

//otra forma con arreglos
const diasLetras3 = [
    'Domingo',
     'Lunes',
     'Martes',
     'Miércoles'
];

console.log(diasLetras3[dia]);


