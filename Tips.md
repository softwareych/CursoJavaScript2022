## En vscode en index.html colocar ! y tab, eso crea la estructura de html
## Polifill: codigo que me permite usar nuevas caracteristicas de versiones viejas ES6 a ES5 por ejemplo.
## El let y el const no sobreescriben los valores de las variables que se encuentran en el objeto window, ejemplo: outerWidth o outerHeight
## Primitivo: no es un objeto y es inmutable: boolean, Null, Undefined, Number (englboa todo integer, float, etc), string, Symbol (valor unico nunca igual a otro)
## JS es CaseSensitive y debilmente tipado

## Seccion 3:
https://mathiasbynens.be/notes/javascript-identifiers
https://mothereff.in/js-variables#%E0%B2%A0%5f%E0%B2%A0
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object
https://github.com/Klerith/javascript-basics/releases/tag/v0.0.2

## Seccion 4:
https://github.com/Klerith/javascript-basics/releases/tag/v0.0.3

## Seccion 5
La carpeta assets se usa para colocar recursos estáticos de la app, que no serán removidos
Librería https://underscorejs.org/ descargar la minimizada de produccion la ESM para usar _.shuffle que crea aletoriedad
.push y .pop en los arreglos

 if( isNaN( valor )){ //funcion para ver si el valore es numerico o no, si es true no es numerico, si es false es nro
 
 DOM: Document Object Model, es un conjunto de objetos anidados para crear un documento html, la idea es tener acceso dinamico y poder manipular, <html> seria un objeto, <head>. <body> tambien... los elementos serían los <div>, <h1> etc Ojo: el archivo html orginal no cambia, es decir, que la manipulación no altera el codigo original
  En la consola colocar document y enter, se verá el código html, si eliminas un elemento y actualizas se aplicaran los cambios en la web
  document.querySelector('body'):recupera el primer elemento que cumpla la condicion especificada, el All trae todas, notese que selecciona lo encontrado
  document.querySelector('img').src //copias el link
  document.querySelector('img').src='pegas el link'  //y enter, veras que cambia la carta
  document.querySelector('small').innerText = <b>hola</b>//lo pone como texto y aparecem las etiquetas como texto
  document.querySelector('small').innerHTML = '<b>hola</b>//lo poner cono html
  document.getElementById('computadora-cartas');
  document.querySelector('computadora-cartas');//regresa null pq busca un tag que tenga ese valor
  document.querySelector('#computadora-cartas');//si funciona
  document.querySelector('.carta');//si funciona, es una clase
  document.getElementByClassNamw('carta');//si funciona, es una clase
  esto hace lo mismo:
  document.querySelector('header').innerText = 'Yenny'; //cambia el titulo blackjack por mi nombre
  document.querySelector('.titulo').innerText = 'hola'; 
  se puede colocar en una variable:
  const titulo =  document.querySelector('.titulo');//crea la referencia y no tiene que repetir el estar buscando en todo el coumento html, lo hace mas rapido
  titulo.innerText = 'chao'
  
  codigo: https://github.com/Klerith/js-blackjack/releases/tag/v1.0.0  juego blackjack
  
 ## seccion 6
 Patrón módulo: desde ESM5 se puede usar, es una seguridad a través de encapsulación (contenedor privado) para que nadie afuera pueda alterar variables ni llamar funciones. es un patrón de diseño a través de una función anónima autoinvocada
 (() => { 
  'use strict' 
  luego poner el código aquí
 })();
 ahora si por la consola se intenta llamar por ej el deck() o el crearDeck() arrojará un error, es decir, no se puede manipular por el DOM, proteje el código
 Ctrl +p, :149 enter... va a esa linea dentro del código
 codigo optimizado: https://github.com/Klerith/js-blackjack/tree/master
 Monimizar el código: https://www.toptal.com/developers/javascript-minifier/
 allí pegar todo el código de juego.js y al darle minimize, el código estará más protejigdo, copiar el resultado en otro archivo: juego-min.js y cambiar en el index el script que hace referencia a juego.js por juego-min.js, el programa debe funcionar igual, eso incluso reduce los megas del código
 
 
 ## Seccion 7
 wwww.caniuse.com: pagina para conocer si lo que quiero usar en JS es soportado por el navegador web que usaré, busca classes , ES6, a partir de allí se puede usar
 Las clases tienen por defecto e implictiamente el patrón de diseño  'use strict' 
 Empiezan en mayúsculas y usan el upper camel case
 Orden de una clase: Propiedades y metodos estaticos, propiedaddes de las clases, constructor, sets (establece valor) y gets ( recupera valor ), métodos, otras cosas privadas por último
 ProtoType: es el adn de una instancia de un objeto, indica de donde viene, sus propiedades.
 
 UNDEFINED: Valor por defecto al crear una variable y no definirle un valor
 
   
 ## Seccion 8
 npm node package managment
 WEBPACK: empaquetador de modulos, ayuda a automatizar, las dependencias de la aplicacion, 
 gestionar las dependencias
 permite montar servidores de desarrollo y pruebas
 cargar modulos
 convertir a diferentes formatos ejemplo de es8 a es7
 minima codigo
 compilar de sass a css
 compila ts a js
 nos permite trabajar con js moderno y despreocuparnos si funcionara en otros mas  viejos
 desventajas: la configuracion inicial es tediosa y puede ser complicado detectar problemas cuando  falla algun paquete
 
 node js: permite correr codigo de JS en el lado del servidor, permite escribir tanto en back como front con js
 
 libreria babel: convierte la aplicacion para que pueda trabajar en navegadores viejos, npm contienen mas de 350 mil paquetes
 
 
 
 
