function saludar(nombre){
    console.log('Hola ' + nombre);
    return 10;
}

//se llama función anónima
const saludar1 =function(nombre) {
    console.log('Hola ' + nombre);
}

const saludarLanda = () => {
    console.log('Hola landa function' );
}

const saludar2 = nombre => {
    console.log('Hola landa function: ' + nombre);
}


const sumar = (a,b) => {
    return a + b;
}

console.log(sumar(1,2));

const sumar2 = (a,b) =>  a + b;//funciona solo cuando es una sola linea de codigo la función

console.log(sumar2(2,2));

function getAleatorio(){
    return Math.random();
}

console.log(getAleatorio());

const getAleatorio2 = () => Math.random();
console.log(getAleatorio2());