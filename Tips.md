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
  
  
