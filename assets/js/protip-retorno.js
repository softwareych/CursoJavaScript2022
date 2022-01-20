
function crearPersona1(nombre,apellido){
    return {nombre:nombre,apellido:apellido}
}

console.log(crearPersona1("fer",'herr'));


function crearPersona2(nombre,apellido){
    return {nombre,apellido}
}

console.log(crearPersona2("fer",'herr'));



const crearPersona = (nombre,apellido) => ({nombre, apellido}); //se debe poner los parentesis para que no de undefined

const persona = crearPersona("fer",'herr');

console.log(persona);


function imprimeArgumentos(){
    console.log(arguments);
}

imprimeArgumentos(10,true,false,'hola','chao');

const imprimeArgumentos2 = (...args) => {// esttos puntos son rest, y no puede colocarse otro parametro luego de ese
    console.log(args);
}

imprimeArgumentos2(15,true,false,'hola','chao');


const imprimeArgumentos3 = (edad, ...args) => {// esttos puntos son rest, y no puede colocarse otro parametro luego de ese : esto no: const imprimeArgumentos3 = (...args, edad) 
    console.log({edad, args});
}

imprimeArgumentos3(115,true,false,'hola','chao');//aunque antes del ...args si puede tener parametros


const imprimeArgumentos4 = ( ...args) => {// esttos puntos son rest, y no puede colocarse otro parametro luego de ese : esto no: const imprimeArgumentos3 = (...args, edad) 
   return args;
}

const [numero, casado, vivo, saludo, despedida] = imprimeArgumentos4(25,true,false,'hola','chao');
console.log( {numero, casado, vivo, saludo, despedida});

const {apellido: nuevoapellido} = crearPersona2('nomb', 'apell');
console.log({nuevoapellido});


const Tony = {
    nombre: 'Tony',
    codeName:  'IronMan',
    vivo: false,
    //edad: 40,
    trajes: ['Mark','otro'],
};

const imprimePropiedades=({nombre,codeName,vivo,edad=0,trajes})=>{//se asigna a la edad el valor 0 por defecto cuando no esta el arg o esta en null
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades( Tony);