const regresaTrue = ()=>{
    console.log('Regresa True');
    return true;
}

const regresaFalse = ()=>{
    console.log('Regresa False');
    return false;
}

console.warn('Not a la negación');

console.log( true );
console.log( !true );
console.log( !false );

console.warn( 'And');//todas las condiciones deben ser verdaderas para que sea true
console.log( true && true);//true
console.log( true && false);//false
console.log( true && !false);//true

console.log( regresaFalse() && regresaTrue());//solo se ejecuta el false pq la primera instrucción regresó falso, y el and dice que todos deben ser psotivios para que de true
console.log( regresaTrue() && regresaFalse());

console.warn( 'OR');//true con que alguno sea verdadero sera true, si ambos son falsos todo sera falso
console.log( true && false);//true
console.log( false && false);//false

console.log( regresaTrue() || regresaFalse());//solo ejecuta el primero pq da true, quiere decir que sera true todo por el or

const a1= true && 'Hola' && 150; //regresa el ultimo valor
const a2= false && 'Hola' && 150;// regresa false y no sigue evaluando los otros valores
const a3=  'Hola' && 'mundo';
const a4=  'Hola' && 'mundo' && false;

const a5= false || 'no soy falso';

const a6= false || undefined || null || 'no soy false' ||true;

console.log({a1,a2,a3,a4, a5, a6})