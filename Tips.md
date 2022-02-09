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
 babel npm node package managment
 WEBPACK: empaquetador de modulos, ayuda a automatizar, las dependencias de la aplicacion, 
 gestionar las dependencias
 permite montar servidores de desarrollo y pruebas acelerando el proceso a pase a producción
 cargar modulos que puedan segmentar la app para facil mantenimiento y soporte
 convertir a diferentes formatos ejemplo de es8 a es5 
 minimizar codigo
 compilar de sass a css
 compila ts a js
 nos permite trabajar con js moderno y despreocuparnos si funcionara en otros mas  viejos

 
 desventajas: la configuracion inicial es tediosa y puede ser complicado detectar problemas cuando  falla algun paquete
 
 node js: permite correr codigo de JS en el lado del servidor, permite escribir tanto en back como front con js
 
 libreria babel: convierte la aplicacion para que pueda trabajar en navegadores viejos, npm contienen mas de 350 mil paquetes
 
  npm: permite gestionarcualquier paquete de node:
 node --version enter
 npm --version enter
 npm init enter : crea el archivo package.json, todas las app de node tienen ese archivo donde se indica las dependencias de la app, que quiero pasar y que no a produccion
 pedira un nombre de package, colocarle cualquier que desee, esto se puede cambiar luego
 version por defecto es 1.0.0
 descripcion:
 enter 
 en git repository puede ponerse el de uno
 en keywords: ayuda en caso de que suban a lrepositorio de paquetes de node, sino solo enter
 autor: mi nombre
 la licencia dejaral igual ener
 guardarcambios con enter
 
 esto creará un archivo package.json con la información de arriba (no acepta comillas simples, deben ser dobles, estructura tipo objeto, pares de valores:
 {
  "name": "webpack-inicial",
  "version": "1.0.0",
  "description": "Este es un cascaron de un proyecto de de webpack",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Yenny Chipamo",
  "license": "ISC"
}
 

 
https://webpack.js.org/
 
 react y angular tienen ya configurado el webpack
 
 ir a https://webpack.js.org/guides/getting-started/
 copiar: 
 npm install webpack webpack-cli --save-dev 
 y pegarlo en laterminar, enter
 
 cli --> herramienta que solo funciona en desarrollo, copia y mueve archivo, borra, cambiar nombre, miniza codigo, etc... al ejecutarla se coloca en el archivo package.json
  "devDependencies": {
    "webpack": "^5.68.0",
    "webpack-cli": "^4.9.2"
  }
 
 Luego añadir la linead el build asi:
   "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack" <--esta
  },
 
Luego ir a la terminal y colocar: npm run build
                               
 esto crea una carpeta llamada y archivo main: dist/main.js     
colocar ese archiv oen el index reemplazando el scripts con ../dist/main.js  los ../ es para ir a un directorio atrasd el src
a la función saludar colocarles la palabra export, para que funcione afuera del scope
volver a hacer el npm run build enter y ejecutar 
                               
https://webpack.js.org/configuration/
crear en la raíz el archivo webpack-config.js y colocar esto:

module.exports = {
    mode: 'development',

    module: {
        rules: []        
    },

    optimization: {},

    plugins: [],
}

en el main se quitará el codigo minimizado y se vera mejor
                               
compilar  con  npm run build enter                             

                               
plugins de webpack
https://webpack.js.org/loaders/html-loader/
                               copiar el link: npm install --save-dev html-loader y pegarlo en laterminal para instalarlo
                               
https://webpack.js.org/plugins/html-webpack-plugin/                               
                               npm install --save-dev html-webpack-plugin idem

 en el archivo package.json deberían aparecer:
  "devDependencies": {
    "html-loader": "^3.1.0",
    "html-webpack-plugin": "^5.5.0",    
...
ahora colocar esto en el webpack.config.js:
                               
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            }
        ]        
    },

lo que hace es barrer los html y compilar: npm run build

 webpack web serve:
Configurar el localhost para que trabaje en el protocolo http o https no el file:
                               
https://webpack.js.org/configuration/dev-server/
instalar en la terminal npm i -D webpack-dev-server
modificar el webpack.config.js colocar el start
                               y en la terminal colocar npm start
 
 Uso de css: import
https://webpack.js.org/loaders/css-loader/
https://webpack.js.org/loaders/style-loader/
                               
instalar ambas dependencias a la vez:                               
en la terminal: npm install --save-dev css-loader style-loader 
                               
en el components.js: import '../css/components.css';
                               
se veran en el package.json
colocar nueva regla en el webpack.config:
            {
                test: /\.css$/
                use: ['style-loader', 'css-loader']
            }
                               
 Incluir stylos generadles:
                               
https://webpack.js.org/plugins/mini-css-extract-plugin/
ver el config.js
npm install --save-dev mini-css-extract-plugin //en la terminal
const MiniCssExtractPlugin = require("mini-css-extract-plugin");     //esto colcoarlo en el config                          
                               
 Manejo de imagenes:
https://v4.webpack.js.org/loaders/file-loader/
sacar $ npm install file-loader --save-dev e instalarlo    
                               
en components
           {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            }
                               
https://webpack.js.org/plugins/copy-webpack-plugin/#root
                               
                               
https://babeljs.io/
                               
Proyecto del curso:                               
                               https://github.com/Klerith/js-moderno-webpack
                               
                               
