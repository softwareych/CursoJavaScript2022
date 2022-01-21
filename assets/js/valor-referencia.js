//con primitivos mandamos por valor no afectamos el mismo valor en memoria
let a = 10;
a=30;

let juan = {nombre: 'Juan'};
let ana = juan;
//pudiera solucionarse así pero lo que hace es poner un objeto dentro de otro y no serviría
//let ana = { juan };
//Con el operador Spread ... si funcionaría
 ana = { ...juan };//así Ana se separa de la memoria de juqan y tomaría el valor que quiero
//ojo no connfundir con el parametro rest el cual se pondría los 3 puntos en los parametros de una función no de una variable
//ejemplo: const cambiaNombre = ( ...persona) => {
//es decir que  el parametro rest une todos los argumentos en una variable y transformalo como un arreglo
//en cambio en el parametro spread que se pone en los otros lugares simboliza: separa todos los elementos, 
//la ventaja es que rompe la referencia que hay en JS y así se puede trabajar con objetos que apunten a diferentes sitios de memoria
//sino, todos los objetos se apuntarían al mismo lugar de memoria

console.log(juan);
console.log(ana);

ana.nombre='Ana';
console.log(juan, ana);//ambas variables toman el último  valor  asignado , es decir Ana

//IMPORTANTE: em JS todos los objetos son pasados por referencia, no por valor (primitivos). en Js todos son objetos exceptuando los primitivos

const cambiaNombre = ( persona) => {
    persona.nombre='Tony';
    return persona;
}

let peter = { nombre: 'Peter'};
let tony = cambiaNombre( peter );

console.log({peter, tony});//todos toman el valor Tony

//para resolver la función de arriba se tendría que convertir persona en un objeto { ...persona} y colocarle el parametro spred
const cambiaNombre2 = ({ ...persona }) => {
    persona.nombre='Tony2';
    return persona;
}

let peter2 = { nombre: 'Peter2'};
let tony2 = cambiaNombre2( peter2 );

console.log({peter2, tony2});

//arreglos
const frutas = ['manzana,', 'pera', 'piña'];

//const otrasFrutas = frutas;

console.time('spread');
const otrasFrutas = [...frutas];//sol1
console.timeEnd('spread');

console.time('slice');
const otrasFrutas2 = frutas.slice();//sol2
console.timeEnd('slice');

console.time('spread2');
const otrasFrutas3 = [...frutas];//sol1
console.timeEnd('spread2');


otrasFrutas.push('mango');//agrego otro elemento al arreglo

console.table({frutas, otrasFrutas});//ambos arreglos toman los mismos valores

//solución : const otrasFrutas = [...frutas];
//otra solución es con el slice, corta el arreglo y regresa los argumentos que especifico, si no se apasa ningun argumento regresa un nuevo arreglo rompiendo la relación

//Cual es más eficiente, con el time mides el tiempo, el spread es más rápido pero si se pone en otro orden cambia un poco

