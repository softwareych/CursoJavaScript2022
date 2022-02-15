const dia = 0;//ojo debe ser el mismo tipo de datos de la condición en el switch

switch( dia){
    case 0:
        console.log('Domingo');
        break;//cada condicion requiere salirse sino seguira evaluando
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;  
    default:
        console.log('No es un día');                  
}