const carros = [
'Ford',
'Maz',
'Honda',
'Toyota'
];

let i =0;

//ojo si cae en un ciclo infinito ir a los 3 puntos, more tools, task manager, seleccionar la pestaña y cerrar
while ( i< carros.length ){//la condicion debe ser verdadera para que se ejecute
    if (i===1){
        //break;//sale del ciclo
        i++;
        continue; //no sale del ciclo, solo que sube para otra iteraccion, importante incrementar la variable i para que no caiga en ciclo infinito
    }
    console.log(carros[i]);
    i++;//    i=i+1; incrementar de 2 en dos i+=2; o 3 seria i+=3;
}

//do while
let j = 0;

do{
    console.log(carros[j]);
    j++;
}while(carros[j]);