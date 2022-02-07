
APUNTES JS

console.log ("string" + variable) eso imprime en pantalla string variable, por ej si let variable = 'carlos'; eso imprime string carlos.
let a=5; console.log(a++) lo que hace es imprimir a, osea 5, y sumarle 1, osea que si hago console.log(a) ahora seria 6. si hago ++a imprime 6 de 1. same con --.
tenemos + - * / (mas, menos, por, dividido) y % que es modulo igual que c 

STRINGS
Todos los metodos devuelven una copia, no modifican la cadena original
console.log(cadena.lenght) devuelve la longitud osea cantidad de caracteres contando espacios

toUpperCase devuelve la cadena en mayusculas
toLowerCase same pero minuscula

indexOf(string) deuvelve la posicion en la que se encuentra el estring, si no lo encuentra devuelve -1 osea console.log(cadena.indexOf(hola)). y si la cadena es hola mundo devuelve 0

replace(valor a buscar, valor nuevo) por ej console.log(cadena.replace('Mundo, 'yOUTUBE)) DE HOLA Mundo pasamos a hola yOUTUBE.

substring(num, num) osea console.log(cadena, substring(3,4)) hace que se imprima del 3 al 4, slice hace lo mismo y si hago por ej (-3) me imprime solo los ultimos 3, pero si hace 0,-2 me imprime todo menos los ultimos 2

trim elimina espacios al final y al inicio

startsWith(valor) devuelve true si arranca con valor o false si no. tambien (valor, 5 ) si la posicion 5 arranca con valor va a devolver true
same con endWith y si parametro adicional es hasta donde en vez de desde donde, osea ('a',4) si el 4 es a es true

includes tambien true o false si esta o no ese valor, el segundo parametro opcional es hasta donde.JS
repeat es para que repita la cantidad de veces que le ponemos en el valor

TEMPLATE STRINGS

console.log(`Hola ${variable} ${variable} tienes ${variable} anios.`);


OBJETO MATH 
predefinido de js 
Math.E y Math.Pi

metodos
Math.abs() valor absoluto
Math.ceil() entero mas chico o igual, redondea hacia abajo
Math.floor() same pero redondea hacia arriba
Math.pow(x,y) potencia de x a la y
Math.random() sin parametro, random entre 0  y 1
Math.round() redondea al entero mas cercano
Math.sign() signo del num o cero.
Math.sqrt( ) raiz cuadrada del numero.

se pueden combinar por ej console.log(Math.round(Math.random() * (10-5))

CONDICIONALES 

tenemos if(condicion) y tambien else if y else. 
if(condicion){
    codigo
}
if else (condicion){
    codigo
}
else{
    codigo
}
o if( condicion) codigo;
se pueden anidar ifs 

tenemos && || < > == 

prompt('introdusca el numero') lo que hace es que ingreses el numero

HTML
con const variable= document.getElementById('numero') hacemos que la variable sea igual a el elemento html con id="numero". osea en el html se va a guardar ese valor

con textContext podemos introducir el contenido de la etiqueta si la tenemos por id

SWITCH

switch (key) {
    case value:
        codigo;
        break;
    case value2:
        code;
        break;
    default:
        codigo;
        break;
}

o switch (key) {
    case value:   y asi apilo casos y lo puedo hacer varias veces, en vez de poner el default ahi abajo le meto otro grupo de casoso o simples.
    case value2:
    case value3;
        codigo;
        break;

    default:
        codigo;
        break;
}

OPERADOR TERNARIO

(condicion)? true:false;
osea ese rue es lo que vamos a hacer
(1<2)? console.log("SIII"): console.log("NOOOOO"); eso imprimiria SIII
tambien puedo ponervarias acciones separadas por comas y agrupadas en un parentesis
(1<2)? 
    (console.log("SII"), console.log("OBVIOO BOBIS")) 
    :
    (console.log("NO"));
    eso imprime SII OBVIOO BOBIS

ARRAYS

puede ser cualquier dato separado por comas. podes mezclar tipos de datos pero no es recomendable por el tema de recorrerlo y eso.
se declara asi (vacio o no)
se a;ade o eliminan elementos cuando qiueras. se comportan como listas
let array=[1,2,3,4,5];
arranca a contar desde el 0 la posicion como en c
se puede hacer consol.log(array) o consol.log(array[posicion]) el primero imprime todo el array y el segundo imprime solo el objeto en la posicion
se puede usar el .lenght por ejemplo array[0].length si es un array se strings.  
se puede hacer arrays de booleanos
    METODOS CON ARRAYS
        array.lenght numero de posiciones que tiene, uno mas que la cantidad real
        Array.isArray true si es un array
        array.shift() elemina el primer elemento y lo devuelve
        array.pop() elimina el ultimo y lo devuelve
        .push(elemento1, elemento2, ...) a;ade 1 o mas elementos al final y devuelve la longitud
        .unshift(elemento1,elemento2,..) a;ade 1  o mas elementos al comienzo y devuelve la longitud 
        .indexOf(elemento) devuelve el primer indice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado
        .lastIndexOf() ultimo indice que coincida con el valor especificado, o -1 si no lo encuentra
        .reverse() invierte el orden de los elementos del array
        .join(separador) devuelve un string que el separador que indiquemos, por defeto son comas.
        .splice(a,b,items) cambia el contenido del arrray eliminando elementos existentes y/o agregando nuevos elementos
            a indice de inicio
            b numero de elementos
            items elementos a a;adir en caso de que se a;adan
            b e items son opcionales
            por ej (3) elimina del 3 al final. (3,2) elimina desde el 3 dos lugares
            (3,2,10) elimina desde el 3, dos posiciones y en la posicion 3 (seria 2) pone un 10
            si b vale 0 a;ade elementos sin eliminar
        .slice(a,b) extrae elementos desde el indice hasta b, si no existe b lo hace hasta el final, y si no hay a ni b hace copia de todo

WHILE Y DO WHILE
igual que en c 
FOR
igual que c

FOR OF Y FOR IN 

let alumnos=['a','b','c','d'];
for(let nombre of alumnos){ recorre los objetos
    console.log(nombre)
}
imprime a b c d

for(let nombre in alumnos){ recorre el indice de un array
    console.log(nombre)
}
imprime 0 1 2 3
    PALABRAS DE BUCLES
        break rompe el bucle
        continue salta la posicion actual 


PARA CASTEAR A INT
parseInt(cosa);

OBJETOS 
propiedades o atributos
    para acceder lo hacemos con punto tipo structs o con []. person.name person['name']
    con el '' porque sino lo busca como variabel y no lo encuentra.
    const person ={
        name:' juan',
        AGE:26,
        sons;['laura','diego']
    }
    for(const key in person){
        console.log(person[key]);
        console.log(key);
    }
    for(const son of person.sons){  person solo no se puede con el of pq no es iterable
        console.log(son);
    }
    tambien console.log(person) y te imprime todo con el formato.

comportamientos o acciones 
    funciones

    function nombre(parametro, parametro){
        return algo; // si queres nomas
    }

    const nombre = (parametro, parametro) => {
        
    }
     const nombre = (parametro, parametro) => devuelve (por ej console.log("hola)// asi sin return ni nada
     si hay un solo parametro no son necesarios los parentesis.
    para llamarla hago nombre('marta').
    no se pueden tener dos finciones que se llamen igual
    el return es como en c que corta la ejecucion

CREAR OBJETOS
    instanciar un objeto
    se necesita una funcoin constructora
    class Persona{ // se recomienda en mayuscula el nombre de la clase
        constructor(nombre, apellido, edad){ // se tiene que llamar constructor
            this.nombre= nombre //this es palabra reservada
            this.apellido= apellido
            this.edad=edad
            this.datos= ` me llamo ${this.nombre} ${this.apellido}  y tengo ${this.edad}`// como estoy dentro del constructor no hace falta poner el this.nombre puedo hacer simplemente nombre
        }
        //FUERA del constructor podemos crear los metodos
        saludar(){
            return `hola soy ${this.nombre}`;
        }
    }
    ahora hago const juan = new Persona('Juan', 'Garcia, 23');
    Y ahi hago juan.nombre por ej o juan.saludar
    se puede hacer books.push(new Book(parametros,parametros));

isNaN() devuelve true si es un numero o false si no

ARREGLAR ALFABETICAMENTE
arreglo.sort() y listooo

METODOS DE ARRAYS
    .from(iterable) converte array en elemento iterable, osea que se puede recorrer como string y array. por ej array.from(word) y hace que word sea un array
    .sort([callback]) ordena elementos de array alfabeticamente por unicode, si pasamos callback los ordena en funcion del algoritmo que le pasemos. callback es una funcion que la ejecuta otra funcion. no sirve para numeros, entonces le pasamosun callback como (a,b)=>a-b. como compara si da menor que 0 o mayor va sabiendo. sino es b-a

    forEach(callback(currentValue,[index])) ejecuta la funcion indicada una vez por cada elemento del array
        numbres.forEach((number)=>console.log(number)) eso imprime todo los numeros del array

    .some(Callback) comprueba si al menos un elemento del array cumple la condicion
    .every(callback) same pero con todos los elementos del array

    .map(callback) transforma todos los elementos del array y devuelve un nuevo array
        por ej numbers.map(number=>console.log(number*2)) y eso multiplica todos los numeros por dos, lo imprime y devuelve se nuevo aray ya multiplicado
    .filter(callback) ifltra los elementos que complen la condicion y devuelve un nuevo array

    .reduce(callback) reduce todos los elementos del array a un unico valor
        por ej console.log(onlineUsers.reduce((users,cont)=>{
            if(user.online) cont++;
            return cont;
        },0) // ese ultimo 0 es la inicializacion de cont en 0, users deberia ser un objeto que no cree

SPREAD OPERATOR
        console.log(...numbers) te pone los numeros del array ahi spreaded, sin eso van uno abajo del otro con flechita
        PASAR UN ARRAY A UNA FUNCION
            let numeros=[1,2,3]
            por ej addNumbers(...numeros), sino se rompe y suma cualquier cosa
        PARA A;ADIR UN ARRAY A OTRO
            users.push(...newUsers) //siendo users un array y newUsers otro
        
        COPIAR ARRAYS
            let array1=[a,2,4]
            let array2= [...array1] // tambien hacinedo solo let array2=array1 pero hay casos en que no se puede
        CONCATENAR
        let nuevo= [...array1,...array2];

        PARAMETROS REST
        const funcion(...numbers)=>{ // esto es para cuando no sabemos que cantidad de parametros va a necesitar, generalmente para bases de datos o APIs
            console.log(...numbers);
        }

        MATH
        let numbers=[1,2,3,4,5,3,23,2,3]
        console.log(Math.max(...numbers)) // sin el ... te da error pq no podes sacar el max de un array

        ELIMINAR ELEMENTOS DUPLICADOS
        console.log([...new Set(numbers)]); esto hace que tengamos un array sin elementos duplicados (set hace que no hayan duplicados, pero sin el ... es un objeto y no un array)

DOM 
        es una API que se utiliza en js, no es parte de javascritp vienen integrado en el navegador

        3 tipos mas usados 
        element node 1 (culquier etiqueta html)
        text node 3 (contenido de la etiqueta )
        comment node 8 cualquier comentario de html 
         cuando trabajamos con el dom las etiquetas van siempre en mayusculas, por ej H1 en vez de h1 comun

         const title= document.getElementById('id')
         console.log(title) ahi nos aparece el title con todas sus cosillas
         si pongo por ejemplo title.textContent ='holaa' el texto ese va a pasar a ser  holaa por que le modifique el text content

         const texto= document.querySelector('.paragraph') tiene que ir ese punto porque es un selector css no una clase, ahi selecciona el primero
         si yo tengo un span dentro de paragraph puedo hacer ahora
         const span = paragraph.querySelector("span")
        o asi const span= document.getElemntById('title').querySelector("span")

        const paragraphs= document.querySelectorAll('.paragraph') eso te devuelve un node list con todos los paragraphs, que NO ES UN ARRAY.
        pero peeeero peroo tengo el spread operator sooo
        const paragraphs= [...document.querySelectorAll('.paragraph')] eso si da un array pero no funciona al 100% en todos los navegadores asi que usamos
        const paragraphs= Array.from(document.querySelectorAll('.paragraph')) y listo tenemos un array

etiqueta js en html se recomienda poner al final antes del cierre del body 

ATRIBUTOS Y CLASES
        ATRIBUTOS
            element.getAttribute('attribute') devuelve el atributo
            element.SetAttribute("attribute", 'value') asigna valor nuevo al atributo, osea lo modifica
        
        CLASES
            element.classList.add('class','class',...) 
            element.classList.remove('class','class',...)
            element.classList.toggle('class' [,force]) si tiene esa clase se la quita y sino se la pone, se usa mucho para menu desplegable 
            element.classList.contains('class') true o false si tiene o no la clase
            element.classList.replace('oldClass', newClass) reemplazza clase por otra 
        ATRIBUTOS DIRECTOS 
            id
            value -> es lo que meten en los formiularios por ejemplo el nombre
                si queremos saber el nombre no podemos poner name.lenght sino name.value.lenght
            textContent devuelve todo con etiquetas internas y eso, no como textContent que solo devuelve el texto.
EVENTOS 
    CUALQUIER COSA QUE SUCEDA POR EJEMPLO QUE EL CONTENIDO SEA LEIDO, QUE EL USUARIO MUEVA EL MOUSE 
    ya no se usa el onclick, en angular se puede usar (click)="funcion()"
    que puedo hacer?
        Element.addEventListener('event',callback) desde javascript
    que eventos funcan? referencia de eventos de mdn te dice cuales sirven, cuales no y cuales maso

OBJETO EVENTO 
        vive siempre que haya un evento 
        input.addEventListener('keyup', (e)=>{
            console.log(e); //eso nos da toda la informacion del evento, la e es por poner un nombre pero puede ser cualquier nombre
        });

CREAR E INSERTAR TEXTO EN EL DOM
        CREAR 
            document.createElement('LI') siempre el document porque ahi lo queremos crear 
            y ahi puedo hacer algo como itemList.textContent='Lunes'
            siempre es hijo de alguien, por ej
            daysList.appendChild(itemsList) ese daysList es el id de un ul en hmtl 
            innerText= textContext pero textcontext es mejor el otro no es estadard ya 
            si quiero poner algo con etiquetas hago algo asi 
            title.innerHtml = 'holarda <span> holllii </span>'
            cada vez que metemos algo el dom redibuja el arbol y es un re laburito entonces se creo esto:
            const fragment = document.createDocumentFragment() par ameter todo el codigo de golpe 
            ahi puedo hacer un for metiendo dias por ejemplo y en el fragment voy a;adiendolo con appendChild y recien cuando termino de agregar todo lo que quiero es introducir en ,por ejemplo, dayList.appendChild(fragment)

            
