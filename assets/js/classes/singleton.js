//singleton: solo permite una unica instancia de la clase aunque yo haga muchos new, útil en conexión a base de datos
class Singleton {//se puede llamar de otra forma
    static instancia;
    nombre = '';

    constructor( nombre = ''){


        if(!!Singleton.instancia){//la doble negación sería false; undefined, true, false: evalua primero el undefinedd , y eso da true y luego lo niega
            return Singleton.instancia;
        }

        Singleton.instancia = this;//this seria la instancia
        this.nombre = nombre;
    }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('2');
const instancia3 = new Singleton('3');

//siempre será ironman, ya que es el primer valor instanciado
console.log (`Nombre de la instancia1 es: ${ instancia1.nombre}`);
console.log (`Nombre de la instancia2 es: ${ instancia2.nombre}`);
console.log (`Nombre de la instancia3 es: ${ instancia3.nombre}`);


