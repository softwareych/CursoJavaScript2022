
class Persona {

    //Las propiedades o metodos estaticos, permiten usarlos sin necesidad de instanciar la clase
    static _conteo = 0;//se refleja en el prototipo, dentro del constructor, para usarla se debe referenciar con el nombre de la clase

    static get conteo(){//ojo si no pongo static debere instanciar la clase
        return Persona._conteo + ' instancias';
    }

    static  mensaje(){
         
        //console.log( this.nombre ); // undefined, ya que al hacer referencia a las propiedades de las clases no estaticas no podrá obtener su valor si no se instancias
        console.log('Hola soy metodo estatico');
    }

    //propiedades,
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    //constructor
    constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase'){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo++;

    }

    //set y gets
    //el set sol orecibe un argumento, no esbuena practica ponerle mas de uno, y el set no puede tener el mismo nombre del argumento
    //pq crearia un ciclo infinito aunque este error este controlado en el ES6 como esquema de protección
    set setComidaFavorita( comida ){//establece un valor
        this.comida = comida.toUpperCase();//convierte en mayuscula el valor
    }

    //gets recupera un valor
    get getComidaFavorita(){
        //return `La comida favorita de ${ this.nombre } es ${ this.getComidaFavorita}`;//esto  caería en un ciclo infinito aunque este controlado en el es6
        return `La comida favorita de ${ this.nombre } es ${ this.comida}`;
    }

    //metodos, se acostumbra de que estén después del constructor aunque no es obligatorio
    quienSoy(){
        //interpolació nde string ${variable}
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${ this.codigo } dice: ${ this.frase }`);  
    }

    //ejemplo de metodos dentro de otro
    miFrase2(){
        quienSoy();
        console.log(`${ this.codigo } dice: ${ this.frase }`);  

        function quienSoy(){
            console.log('Hola Mundo');
        }
    }
}

//instancias a la clase Persona
const spiderman = new Persona ( 'Peter', 'Spider', 'Soy tu amigable Spiderman');
const ironman = new Persona ( 'Tony', 'Ironman', 'Yo Soy ironman');
console.log ( spiderman );

console.log ( ironman );

//llamada de métodos
spiderman.quienSoy();//los metodos necesitan los parentesis para ejecutarlos, sino se ponen solo se hace referencia al metodo pero no se ejecuta
ironman.quienSoy();

spiderman.miFrase();

//llamada al set, no es un metodo por lo cual no se llama con ()
spiderman.setComidaFavorita = 'El pie de cereza de la Tía May';

//se puede crear una nueva propiedad sin hacer referencia de ella en la clase, ej:
spiderman.nemesis = 'Duende verde';
//spiderman.comida = 'Duende verde';//la acepta pq no es propiedad privada


console.log ( spiderman );
console.log( spiderman.getComidaFavorita );

//uso de static
//Persona._conteo = 2;//es un ejemplo para saber que se puede cambiar ese valor
console.log('Conteo statico: ', Persona._conteo);//forma de saber cuantas instancias hay de la clase
console.log( Persona.conteo); //llama al metodo no a la propiedad

Persona.mensaje(); //llamada a metodo

Persona.propiedadExterna = 'Hola Mundo';//crea un metodo que no esta en la clase
console.log( Persona.propiedadExterna );
console.log ( Persona );
