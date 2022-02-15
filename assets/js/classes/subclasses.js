
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


//herencia
class Heroe extends Persona{
    clan = 'Sin clan';

    //en el constructor de persona no esta el clan, si no lo tiene toma el de la clase padre, pero si lo pongo aqui debo poenr Super pq debe llamar al padre primero
    constructor( nombre, codigo, frase){
        //regla: primero se debe llamar al super
        super(nombre, codigo, frase);//esto debe estar antes de los this
        this.clan ='Los Avengers'
    }

    quienSoy(){//sobreescribe el metyodo del padre
        //interpolació nde string ${variable}
        console.log(`Soy ${ this.nombre } y mi clan  es ${ this.clan }`);
        super.quienSoy();//llama al metodo del padre
    }

}

//instancias a la clase Persona
const spiderman = new Persona ( 'Peter', 'Spider', 'Soy tu amigable Spiderman');
const spiderman2 = new Heroe ( );
console.log ( spiderman );

console.log ( spiderman2 );

const spiderman3 = new Heroe ( 'Peter Parker', 'Spider', 'Soy tu amigable Spiderman');
console.log ( spiderman3 );
spiderman3.quienSoy();