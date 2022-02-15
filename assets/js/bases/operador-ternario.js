

dia = 2;
if ([0,6].includes( dia)){
    console.log('Fin de semana');
}else {
    console.log('Día de semana');
}

hora = 0;
mensaje = `Cerrado ${ hora}`;

//condicion ternaria ? :
horaApertura = ([0,6].includes( dia)) ? 9 : 11; //0 y 6 son fines de semana
console.log(horaApertura);

