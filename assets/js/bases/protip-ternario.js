const elMayor =(a, b) => {
    return (a>b) ? a : b;
}

console.log(elMayor(20, 15));

//simplificando con función flecha
const elMayor2 =(a, b) => (a>b) ? a : b;

console.log(elMayor2(20, 15));

const tiendaMenbresía = (miembro) => (miembro) ? '2 dolares' : '10 dolares';//miembro es boolean

console.log(tiendaMenbresía(false));

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    amigo ? 'Thor' : 'Loki',
    (()=>'Nicky')(), //funcion anonima autoinvocada
    elMayor(10,15)
]

console.log( amigosArr);


//rangos con operador ternario
const nota = 95;
const grado =   nota >= 95 ? 'A+':
                nota >= 90 ? 'BN':
                nota >= 85 ? 'C+': 'F';//la F es en caso contrario

console.log(nota, grado);
