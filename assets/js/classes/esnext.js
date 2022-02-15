
//METODOS Y PROPIEDADES PRIVADAS 

class Rectangulo {
    #area =0;

    constructor(base = 0, altura = 0){
        this.base =base;
        this.altura = altura;

        this.#area = base * altura;
    }

    calcularArea(){
        console.log( this.#area * 2 );
    }
}

const rectangulo = new Rectangulo(10,15);
//rectangulo.#area = 100; //ojo puedo cambiar el valor aunque no es correcto, cuando no hay get y sets y cuando no es privada el area

rectangulo.calcularArea();
console.log(rectangulo);