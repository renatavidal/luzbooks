
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

DOM TRAVERSING
        RECORRER EL NODO
        PADRE 
            parentNode devuelve el nodo padre que puede no ser un elemento
            parentElement devuevle el nodo elemeneto padre si hago parentNode.parentNode me da el abuelo y asi consecutivamente.
            los noods de tipo element y element fragment nunca tendran nodo padre 
        HIJOS 
            childNodes todos los nodos hijos 
            children todos los nodos elementos hijos 
            firstChild primer hijo 
            firstElementChild primer elemento hijo 
            lastChild 
            lastElementChild 
            hasChildNodes() true si el nodo tiene hijos y false de lo contrario
        HERMANOS 
            nextSibiling siguiente nodo hermano 
            nextElementSibiling 
            previousSibiling 
            previousElementSibiling 
        CERCANO 
            closest(selector) selecciona el nodo mas cercano que cumpla con el selector (aun es experimental).
    INSERTAR, CLONAR Y BORRAR ELEMENTOS 
        Por ejemplo append child lo mete siempre ultimo por eso tenemos: 
        parent.insertBefore(newelement, referenceelement)

        parent.insertAdjacentElement(position,element)
        parent.insertAdjacentHTML(position,HTML) estos dos funcionan igual pero con por ejemplo '<li> nuevo elemento </li>' (en ambos, el segundo parametro)
        parent.insertAdjacentText(position,text)

        positions: 
        beforebegin antes de que empiece (hermano anterior) van asi 'beforebegin'
        afterbegin despuesd e que empiece (primer hijo)
        beforeend antes e que termine (ultimo hijo)
        afterend despues de qeu acabe (hermano siguiente)
        
        parent.replaceChild(newChild, oldchild)

        ESTOS NO FUNCIONAN EN INTERNET EXPLORER

            parent.before() hermano anterior 
            parent.prepend() primer hijo 
            parent.append() ultimo hijo 
            parent.after() hermano siguiente
            child.replaaceWith(newChild)

            clonar y eliminar 
            element.cloneNode(true|false) clona el nodo. true: todo el elemento con los hijos, false: elemento sin hijos
            element.remove()
            element.removeChild(child)
    OBJETOS NATIVOS Y TIMERS 
        objeto window objeto global de el descienden todos los objetos, siempre que no ponemos nada adelante el navegador va a dar por hecho que es window.
        NO ESTA BUENO ESTO PORQUE FRENA LA CARGA DE LA PAGINA
        alert() imprimir cosas
        promt() para que el usuario escriba
        confirm() es para aceptar o cancelar, es booleano. no se le puede dar estilo a esa ventana.
        objeto console- el objeto qeu contienen la consola del navegador
        console.log() es el que imprime por consola
        console.dir() parecido al anterior pero siempre se puede desplegar (usar si el otro no despliega por ejemplo un ul (lista))
        console.error() salta un error por consola
        console.table() te muestra el elemento que le pongas pero en una tabla toda canchera por consola

        objeto location objeto que contiene la barra de direcciones 
        locaiton. 
        href la dire del lugar, podemos cambiar al valor de la url
        protocol a ver si es http o qeu cosa 
        host dominio principal que estemos visualizando 
        pathname el resto del coso, el directorio 
        hash paramtros entre paginas 
        reload() recarga la pagina cada vez que lo lee, se suele poner en un if por si pasa algo 

        objeto history - historial del navegador
        back() una pagina hacia atras
        foward() una pagina hacia adelante
        go(n|-n) o negativo o positivo,  n pag hacia adelante o -n paginas hacia atras
        lenght  cantidad d e paginas en el historial 

        objeto date 
        tiene un monton de metodos que estan en internet je 
        necesita ser instanciado osea inicializado
        const date= new Date()
        console.log(date.getDay()) y ahi te tira que dia es (empieza a contar desde 0 osea domingo es 0)

    timers 
        timeout
        setTimeout(()=>{code},delay-in-miliseconds) hace que se ejecute la funcon despues del delay. si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia)
        interval
        setInterval(()=>{code},delay-in-miliseconds) hace que se ejecute la funcion cada delay de milisegundos. si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(referencia)
        ejemplos:
            button.addEventListener('click',()=>{
                setTimeout(saludar, 3000);
            )}
            const saludar= () =>{
                console.log('hola');
            }

            o asi 
            button.addEventListener('click',()=>{
                setTimeout(() =>{
                    console.log('hola');}
                    , 3000)
            )}
            para pararlo con celarTimout tengo que guardar el timout en una variable
            const timeout= setTimeout(() =>{
                console.log('hola');}
                , 3000)
            )}
            button.addEventListener('click',()=>{
                clearTimeout(timeout);
            }) aca se ejecutaria el holi a menos que haga click en el boton antes de los 3 segundos

OBJETO XMLHTTP REQUEST 
            AJAX 
            se suele hacer pho las pediciones a los servidores 
            button.addEventListener('click', ()=>{
                ler xhr
                if (window.XMLHttpRequest) //aca le digoque el navegador lo soporte
                    xhr= new XMLHttpREquest()
                } else {
                    xhr= new ActiveXObject("Microsoft.XMLHTTP")
                    
                }
                xhr.open('GET', ' direccion del archivo php o url')// el usa el url de json place holder
                xhr.addEventListener('load', (data)=>{
                    const dataJSON = JSON.parce(data.taget.response); // java script object notation, osea convierto el string en objeto javascript
                    const list= document.getElementById('list'); //ese id es de HMTL
                    for( const userinfro of dataJSON){
                        const listItem= document.createElement('LI')
                        listItem.textContent= `${userInfo.id} - ${userInfo.name}`
                        list.appendChild(listItem);
                    }
                }) //esto hace que sepamos que la info esta terminada y guardar la info en una variabole 
                xhr.send()
            }) //con esto nos ahorramos jquery, no se pq 




CALLBACKS 
            es una funcion que se ejecuta a traves de una funcion
            no son asincronos es decir se ejecutan por orden 
            ejemplo 
            const getEmail= (user,cb)=> {
                const email = emails.find(email => email.id == user.id)
                if (!email) cb (`${user.name} hasnt got email`)
                else cb (null, { 
                    id: user.id,
                    name: user.name,
                    email: email.email
                })
            }
            getEmail(3, (err,res)=>{
                if(err) return console.log(err)
                console.log(res);
            })

PROMESAS 
            objeto que dentro tiene cdos callbacks internos 
            const promise = new Promise((resolve, reject)) esos callbacks vienen preprogramados
             por ej
             const getUSer = (id)=>{
                const user = users.find(user=>user.id == id);
                return promise = new Promise((resolve, reject)=>{
                    if(!user) reject('no existe');
                    else resolve(user);
                )}
                }
             ahora leemose lecontenido de las promedas 
             getUser(1)
                .then(user => getEmail(user)) //otra funcion
                .then(res=> console.log(res)) // imptimo la respuesta de getEmail
                .catch(err=> console.log(err)) //este catch agarra cualquier error de la ejeucion, incluso los de getEmail 

FETCH reemplazo modermo para el objetO XMLHttpRequest 
                encapsula y manipula promesas - se suele usar para hacerpeticiones a API 
                tiene response y reject internos 
                arrayBuffer() archivos binarios en bruto (mp3,pdf,jpg,etc) se utiliza cuando se necesita manipular el contenido del archivo
                blob() archivos binarios en burto, se utiliza cuando no se necesita manipular el contenido y se va a trabajar con el archivo directamente 
                clone() creo clon de un objeto de respuesta, identro con todos los setnidos pero almacenado en una varibale diferente 
                formData() se utiliza para leer los objetos formData 
                json() convierte archivos json en un objeto de javascript 
                text() se utiliza cuando queremos leer un archivo de texto. siempre se codifica en UTF-8 
        COMPROBAR EL SOPORTE FETCH 
                if( window.fetch != undefined) console.log('anda')
                else console.log('no anda')

                const button= document.getElementById('button')
                button.addEventListener('click', ()=>{
                    fetch('url')
                        .then(res ==> res.ok ? Promise.resolve(res) : Promise.reject(res))
                        .then( res=> res.json) // aca llega si hay un resolve por parte de fetch. res esta encapsulado entonces tengo que hacerlo json
                        .then(res => {
                            const list= document.getElementById('list')
                            const fragment= document.createDocumentFragment()
                            for (const userInfo of res){
                                const listItem = document.createElement('LI')
                                listItem.textContent = `${userInfo.id} - ${userInfo.name}`
                                fragment.appendChild(listItem);
                            }
                            list.appendChild(fragment)
                        }
                    .catch( err => console.log(err))
                })
        PETICIONES POST CON FETCH 
                fetch(url, {
                    method: 'POST',
                    body: los daot suqe enviamos, si es un objeto hay que convertirlo con JSON.stirngtify(datos)
                    headers: {
                        cabeceras de info sobre lo que enviamos
                    }
                })

                ejemplo 
                const button= document.getElementById('button')
                button.addEventListener('click', ()=>{
                    const newPost = {
                        title: 'new post'
                        body: ' loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
                        userId:1
                    }
                    fetch('url', {
                        method:'POST'
                        body: JSON.stringtify(newPost),
                        headers:{
                            "content-type": " application/json</>"
                    }).then(res=> res.json())
                    .then(data => console.log(data))
                })
        FETCH LECTURA DE ARCHIVOS 
        const buttonIMG= document.getElementById('button-img')
        const buttonPDF= document.getElementById('button-pdf')
        buttonIMG.addEventListener('click', ()=>{
            fetch('dog.jpg')
                .then(res=> res.blob()) // blob es binary long object
                .then( img=> {
                    document.getElementById('img').src = URL.createObjectURL(img) //consvierte el objeto en una url valida par visualizar el objeto, tiene que ser blob
                })
                //para pdf es lo mismo cambiando el img por pdf y el src por href 
ASYNC AWAIT 
            hacer funciones asincronas en js de forma nativa 
            funciona con promesas

            const getName = async() => {
                return new Promise((resolve, reject)=>{
                    setTimeout(()=>{
                        resolve ('Dorian')
                    }, 1500)
                    
                })
            }

            const sayHello = async()=> {
                const name = await getName() //tengo que ponerle ese await, que esta siempre en async, para avisarle que va a tardar ese name en llegar
                return `Hello ${name}`
            }
            console.log(sayHello()) //esto va a decir hello promise o algo asi, para solucionar hago asi 

            sayHello().then(res=>console.log(res)) 

LIBRERIA AXIOS
            libreria basada en promesas para el cliente y el servidor 
            tiene transformacion automatica cuando hacemos peticiones json 
            tiene soporte para internet explorer 11 
            pesa poco y hace peticiones en muy poco tiempo 
            hay que insertarla en un <script url= "plinplinplin"></script> en el html
        GET  
            ej 
            buttonIMG.addEventListener('click', ()=>{
                axios({
                    method: 'GET',
                    url: "url"
                }).then (res =>{
                    const list= document.getElementById('list')
                    const fragment= document.createDocumentFragment()
                    for (const userInfo of res.data){
                        const listItem = document.createElement('LI')
                        listItem.textContent = `${userInfo.id} - ${userInfo.name}`
                        fragment.appendChild(listItem);
                    }
                    list.appendChild(fragment)
                }).cathc(err =>console.log(err))
            })


        POST
        buttonIMG.addEventListener('click', ()=>{
            axios({
                method: 'POST',
                url: "url"
                data:{
                    title: 'new post'
                    body: ' loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',
                    userId:1
                }
            })
            .then (res => console.log(res.data)
            .cathc(err =>console.log(err))
        })


FORMULARIOS
        validar formularios 
        supongo que tengo todas las variables guardadas con el get element by id 
        ahora pongo 
        const forIsValid = {
            name:false,
            email: false,
            gender: false,
            terms: false,
        }
        form.addEventListener('sumbit', (e)=> {
            e.preventDefault() //para que la persona no pueda activar el boton desde inspeccionar 
        })
        name.addEventListener('change', (e)=>{
            if(e.target.value.trim().lenght>0) formIsValid.name=true;
        })
        //y asi con todos
        y para hacer por ejemplo que si acepta los terminos y condiciones se ponga en true hago asi 
        terms.addEventListener('change', (e)=>{
            forIsValid.terms= e.target.checked
            e.target.checked ? button.removeAttribute('disabled'): 
            button.setAttribute('disabled', true); //este button los get by id
        })
        const validateForm = ()=> {
            const formValues= object.values(formIsvalid)
            const valid = formValues.findIndex( value => value == false)
            if(valid == -1) form.submit()
            else alert('form invalid')
        }
    EXPRESIONES REGULARES 
        secuencia de caracteres que busca un patron de busqueda 
        sintaxis:
        /patron/
        banderas:
            i: ignore case, no difiera mayusculas y minusculas 
            g: global, no se para despues de la primera coincidencia 

        ej:
            const text= document.getElementById('text').textContent
            const regEx= /lorem/gi //3 formas de hacer lo mismo
            const regEx= new REgExp ('lorem', 'gi')
            const regEx= new REgExp ('/lorem/', 'gi')
            console.log(regEx.text(text)) //eso nos da true porque el texto tiene lorem y aunque sea Lorem con mayuscula la i hace que no importe, se puede hacer tambien con text.includes('Lorem') pero despues si sirven las expresiones regulares 

        comodines:
            sustitucion: define un comodin dentro del patron, el simbolo en el ".", por ej i..um te encuentra el ipsum 
            listado de caracteres validos: entre corchetes se pone una lista de caracteres validos [aeiou] ahi van todas las vocales 
            rangos: entre corchetes [a-z] todas las letras minusculas 
            mezcla entre rangos y listas: 
            [0-50u] ahi van los num del o al 5 y las letras o u 
            cadenas completas : entre parentesis, si queremos mas palabreas las separamos por | osea (lorem|amet) o (12|42) porque si pongo (1242) me busca el 1 el 2 el 4 y el 2, no el doce yel cuarenta y dos 

        delimitadores:
        ^ antes de este simbolo no puede haber nada 
        $ despues de este simbolo no puede haber nada
        osea ^hola$ va a dar false si tengo -hola! pero true si tengo hola 
        cantidad:
        {} aparecer cantidad exacta de veces :
            {n} se repite n veces 
            {n,m} entre n y m veces ambas incluidas 
            {n,} como minimo n veces y sin maximo
        * lo que esta antes de asterisco puede estar, no estar o repetir  
            por ej [0-9]*a puede ser 034432423423a y va a ser valido pero a23423a y no por la primera a 
        ? antes de ? puede no estar o estar solo una vez 
        + antes del + tiene que estar una vez minimo 

        caracteres:
            \s coincide con un caracter de espacio, entre ellos incluidos estacio, tab, salto de pagina, salto de linea y retorno de carro

            \S coincide con todos menos caracteres de espacio 
            \d coincide con un caracter de numero, equivalente por ej a [0-9]
            \D coincide con cualquier caracter no numerico 
            \w coincide con cualquier caracter alfanumerico incluyendo el guion bajo 
            \W coincide con todo menos caracteres de palabra por ejemplo .- ! ? 
    
    LIBRERIA DE VALIDACIONES 
        <script src="validate.js"></script> y ahi te tira todas las cosillas para validar, todas las funciones hay que descargarla de github 

APIS 
    WEB STORAGE clave valor, en el dispositivo
    sessionStorage()  se borra cuando el navegador se cierre 
    localStorage() guarda info permanenetemente (o hasta que se borre manualmente)
    getItem() recibe como parametro la clave de la que queremos obtener el valor
    setItem() asignar una clave:valor 
    clear() borra la info 
    removeItem() y  le paso la key de lo que quiero borrar


    ej 
    cont form = document.getElementById('form')
    const keys = document.getElementById('keys')

    form.addEventListener('submit', (e)=>{
        e.preventDEfault() //esto es para que no se recargue la pagina 
        if (localStorage) // esto para saber si  funiona en el navegador 
        sessionStorage.setItem('name','dorian')// ese dorian podria ser un objeto y hago JSON.stringtify(person)
        // O ASI
            sessionStorage.setItem(form.key.value, form.value.value) //siendo que el formulario pide key y value
    })
DRAG AND DROP 
    API 
    hay dos objetos el que arrastramos y la zon a en que lo dejamos 
    objeto arrastrar: 
        dragstart: se diaspara al comenzar a arrastrar 
        drag: se dispara mientras arrastramos 
        dragend: se dispara cuando soltamos el objeto 

    zona de destino:
        dragenter: se dispara cuando el objeto en tra en la zona de destino 
        dragover: se dispara cuando el objeto se mueve sobre la zona de destino 
        drop: se dispara cuando el objeto se suelta en la zona de destino 
        dragleave: se dipara cuando el objeto sale de la zona del destino 
        hacemos dropzone.addEventListener('dragover', (e)=>{ //eso de dropzone es el get element by id, el nombre que le di
            e.preventDefault() //eso para que no aparezca el mouse ccomo prohibido cuando paso por la zona de dropeo
            console.log('dragover')
        })
        dropzone.addEventListener('dropr', (e)=>{ //sin el anterior de dragover este de drop no funciona
            e.preventDefault() //eso para que no aparezca el mouse ccomo prohibido cuando paso por la zona de dropeo
            console.log('drop')
        })

        en HTML le ponemos el atributo draggable=true a los elementos que queremos mover 
        en firefox necesita dataTransfer que le muestra toda la data de lo que estoy transfiriendo por ej:
        e.dataTransfer.setData('text/plain', e.targer.id)
        
        necesitamos el dragover 
        ejemplo:
            const pendingTasks = document.getElementById('pending-tasks') //esto es el primer contenedor
            const finishedTasks = document.getElementById('finished-tasks') //esto el segundo conetendor
            //dataTransfer
            //setData: Establece la información que queremos compartir
            //getData: Establece la información que queremos obtener
            pendingTasks.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', e.target.id)
            })
            
            pendingTasks.addEventListener('drag', (e) => {
                e.target.classList.add('active')
            })
            
            pendingTasks.addEventListener('dragend', (e) => {
                e.target.classList.remove('active')
            })
            
            //OBLIGATORIO, SI NO, NO FUNCIONA
            finishedTasks.addEventListener('dragover', (e) => {
                e.preventDefault()
            })
            
            finishedTasks.addEventListener('drop', (e) => {
                e.preventDefault()
                const element = document.getElementById(e.dataTransfer.getData('text'))
                element.classList.remove('active')
                finishedTasks.appendChild(pendingTasks.removeChild(element))
            }) 

API file 
        leer archivos que introduzcamos a traves de un input o de la api anterior (drag and drop). son procesos asincronos
        FileReader.readAsData()
        FileReader.readAsText()
        ejemplo:
        const fileInput = document.getElementById('file')
        const img = document.getElementById('img')
        const images = document.getElementById('images')
        const text = document.getElementById('text')
        
        // fileInput.addEventListener('change', (e) => {
        //     const file = e.target.files[0]
        //     const fileReader = new FileReader()
        //     fileReader.readAsText(file)
        //     fileReader.addEventListener('load', (e) => {
        //         text.textContent = e.target.result
        //     })
        // })
        
        //Carga simple de imagen
        // fileInput.addEventListener('change', (e) => {
        //     const file = e.target.files[0]
        //     const fileReader = new FileReader()
        //     fileReader.readAsDataURL(file)
        //     fileReader.addEventListener('load', (e) => {
        //         img.setAttribute('src', e.target.result)
        //     })
        // })
        
        //Carga múltiple de imágenes
        fileInput.addEventListener('change', (e) => {
            const files = e.target.files
            const fragment = document.createDocumentFragment()
            for (const file of files) {
                const fileReader = new FileReader()
                const img = document.createElement('IMG')
                fileReader.readAsDataURL(file)
                fileReader.addEventListener('load', (e) => {
                    img.setAttribute('src', e.target.result)
                })
                fragment.appendChild(img)
            }
            images.appendChild(fragment)
        }) 

BARRA DE PROGRESO 
        controlo el widht del css de esa barra de progreso 
        el evento es progress
        const progress = document.getElementById('progress');
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0]
            const fileReader= new FileReader()
            fileReader.ReadDataAsURL(file)
            fileReader.addEventListener('progress', (e)=>{
                //loaded nos dice cuanto lleva y total el toral del archivo
                progress.style.widht =Number.parseInt(e.loaded*100 / e.total) + '%'
            })
            fileReader.addEventListener('loadend', ()=>{ //esto es cunado ya termina
                alert('ya cargo beibi')
            })
        }) 
        para subir muchas fotos podes poner multiple en el input html 

API INDEXEDEB 
        almacenar datos en el navegador, es como el de local storage pero con mas capacidad 
        tarda entonces hay que escuchar cuando cargo 
        usa eventos DOM Para mostrar cuando los resultados estan disponibles 
        es orientada a objetos, osea no SQL
        primero creamos la base con open() 
        para ver si existe hacemos onupgradeneeded(), y ahi la crea 
        crear almacen de objetos con createObjectStore()
        escuchamos evento de exito unsecces() o error onerror()

        EJEMPLO CREAMOS LA BASE DE DATOS 
            const indexedDB = window.indexedDB //window pq sino tienen el mismo nombre y da error 
            if(indexedDB){
                let db //aca voy a guardar la base de datos
                const request= indexedDB.open('tasklist', 1)// tasklist es le nombre de la base de datos, el segundo parametro es la version, siempre numeros enteros. distintas versiones son distitnas bases de datos
                request.onsuccess=()=>{
                    db= request.result
                    console.log('OPEN', db)
                }
                request.onupgradeneeded=()=>{
                    db= request.result
                    console.log('create', db)
                    const objectStore= db.createObjectStore('tareas')

                }
                request.onerror=()=>{

                    console.log('error', error)
                }

            }
        AÑADIR DATOS
        if(indexedDB){
            let db 
            const request= indexedDB.open('tasklist', 1)
            request.onsuccess=()=>{
                db= request.result
                console.log('OPEN', db)
            }
            request.onupgradeneeded=()=>{
                db= request.result
                console.log('create', db)
                const objectStore= db.createObjectStore('tareas', { //hay que crear una key, para eso hacemos asi 
                    keyPath;'taskTitle' //osea genera la clave que ees el title de task
                })

            }
            request.onerror=()=>{
                console.log('error', error)
            }
            const addData = (data) =>{
                const transaction = db.transaction(['tasks'], 'readwrite')
                const objectStore= transaction.objectStore('tasks')
                const request = objectStore.add(data)
            }

            form.addEventListener('submit', (e)=>{
                e.preventDefault()
                const data = {
                    taskTitle: e.target.task.value,
                    taskPriority: e.target.prieority.value
                }
                addData(data)
            })
    LEER DATOS 
           
    lo mismo que antes poero le agrego esto en request.onsucces porque tiene que ya haber abierto y toma su tiempo
    request.onsuccess=()=>{
        db= request.result
        console.log('OPEN', db)
        readData()
    }
    const readData = (data) => {
        const transaction = db.transaction(['tasks'], 'readonly')
        const objectStore= transaction.objectStore('tasks')
        const request = objectStore.openCursor() //abre el cursor y permite leer la info
        const fragment = document.createDocumentFragment() ///esto se pone arriba de onsucces porque el succes lo va a leer a cada vuelta que continua leyendo, osea cada vez que lea un registro
        request.onsuccess = (e) =>{
            
            const cursor= e.target.result
            if (cursor){
                const taskTitle = document.createElement('P')
                taskTitle.textContent= cursos.value.taskTitle
                fragment.append(taskTitle)
                cursor.continue()
            } else{
                console.log('no more dataa')
                tasks.textContent='' esto es para que no vuelva a agregar todo cuando meto una nueva por el fragmento
                tasks.append(fragment)
            }
        }
    }

ACTUALIZAR DATOS 
    data-action="update" eso lo pongo en el html en el coso que quiera cambiar, por ejemplo en el boton de submit 
    es igual que la funcion de getDAta pero en vez de add en la tercera linea pongo put(data) osea si existe la tarea la modifico y sino la agrego 


        const indexedDB = window.indexedDB
        const form = document.getElementById('form')
        const tasks = document.getElementById('tasks')

        if (indexedDB && form) {
            let db
            const request = indexedDB.open('tasksList', 1)

            request.onsuccess = () => {
                db = request.result
                console.log('OPEN', db)
                readData()
            }

            request.onupgradeneeded = (e) => {
                db = e.target.result
                console.log('Create', db)
                const objectStore = db.createObjectStore('tasks', {
                    keyPath: 'taskTitle'
                })
            }

            request.onerror = (error) => {
                console.log('Error', error)
            }

            const addData = (data) => {
                const transaction = db.transaction(['tasks'], 'readwrite')
                const objectStore = transaction.objectStore('tasks')
                const request = objectStore.add(data)
                readData()
            }

            const getData = (key) => {
                const transaction = db.transaction(['tasks'], 'readwrite')
                const objectStore = transaction.objectStore('tasks')
                const request = objectStore.get(key)

                request.onsuccess = (e) => {
                    form.task.value = request.result.taskTitle
                    form.priority.value = request.result.taskPriority
                    form.button.dataset.action = 'update'
                    form.button.textContent = 'Update Task'
                }
            }

            const updateData = (data) => {
                const transaction = db.transaction(['tasks'], 'readwrite')
                const objectStore = transaction.objectStore('tasks')
                const request = objectStore.put(data)
                request.onsuccess = () => {
                    form.button.dataset.action = 'add'
                    form.button.textContent = 'Add Task'
                    readData()
                }
            }

            const readData = () => {
                const transaction = db.transaction(['tasks'], 'readonly')
                const objectStore = transaction.objectStore('tasks')
                const request = objectStore.openCursor()
                const fragment = document.createDocumentFragment()

                request.onsuccess = (e) => {
                    const cursor = e.target.result
                    if (cursor) {

                        const taskTitle = document.createElement('P')
                        taskTitle.textContent = cursor.value.taskTitle
                        fragment.appendChild(taskTitle)

                        const taskPriority = document.createElement('P')
                        taskPriority.textContent = cursor.value.taskPriority
                        fragment.appendChild(taskPriority)

                        const taskUpdate = document.createElement('BUTTON')
                        taskUpdate.dataset.type = 'update'
                        taskUpdate.dataset.key = cursor.key
                        taskUpdate.textContent = 'Update'
                        fragment.appendChild(taskUpdate)

                        const taskDelete = document.createElement('BUTTON')
                        taskDelete.textContent = 'Delete'
                        fragment.appendChild(taskDelete)

                        cursor.continue()
                    } else {
                        tasks.textContent = ''
                        tasks.appendChild(fragment)
                    }
                }
            }

            form.addEventListener('submit', (e) => {
                e.preventDefault()
                const data = {
                    taskTitle: e.target.task.value,
                    taskPriority: e.target.priority.value
                }


                if (e.target.button.dataset.action == 'add') {
                    addData(data)
                } else if (e.target.button.dataset.action == 'update') {
                    updateData(data)
                }

                form.reset()
            })

            tasks.addEventListener('click', (e) => {
                if (e.target.dataset.type == 'update') {
                    getData(e.target.dataset.key)
                }
            })
        } 
    BORRAR DATOS 

        const taskDelete= document.createElement('BUTTON')
        taskDelete.textContent= 'Delete'
        taskDelete.dataset.type = 'delete'
        taskDelete.dataset.key = cursor.key
        fragment.append(taskDelete)

        cursor.continue()

        tasks.addEventListener('click', (e) => {
            if (e.target.dataset.type == 'update') {
                getData(e.target.dataset.key)
            }
            else if (e.target.dataset.type == 'delete') {
                deleteData(e.target.dataset.key)
        })

        const deleteData = (data) => {
            const transaction = db.transaction(['tasks'], 'readwrite')
            const objectStore = transaction.objectStore('tasks')
            const request = objectStore.delete(key) //esto solo cambia con update
            request.onsuccess = () => {
                readData()
            }
        }

API VISIBILITY CHANGE 
        para que cuando cambio de pesta;a ej video se deje de reproducir 
        const video = document.getElementById('video')
        addEventListener('visibilitychange', (e)=>{
            if(document.visibilityState == 'visible'){
                video.play()
            } else if (document.visibilityState=='PAUSE'){
                video.pause()
            }
        })
         o mas facil asi 
         addEventListener('visibilitychange', ()=> document.visibilityState == 'visible'? video.play() : video.pause())

API ONLINE/ OFFLINE 
        addEventListener('online', (e)=>{

        })
        addEventListener('offline', (e)=>{
            
        })

        const setAlert= (status)=>{
            alert.classList.remove('alert--online')
            alert.classList.remove('alert--offline')

            status ===0?
            setTimeout(()=>{
                alert.textContent= 'offline'
                alert.classList.add('alert--offline')
            },100) : //ese 100 es por un tema de animaciones
            setTimeout(()=>{
                alert.textContent= 'online'
                alert.classList.add('alert--online')
            },100) 
        }

API INTERSECTION OBSERVER - lazy load
        no cargar elementos que no vemos para ahorrar tiempo 
        const boxes = document.querySelectorAll('.box')

        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(entry.target.id, 'is intersecting')
                }
            })
        }

        const options = {
            // root:
            // rootMargin: '-200px' //esto dice que pasados los 200px de ese objeto lo carga
            threshold: 0.25 //esto dice que cuando intersecto el 25% del elemento lo va a cargar
        }

        const observer = new IntersectionObserver(callback, options) //cuando se esta por ver llama al callback, options es opcional
        boxes.forEach(element => observer.observe(element)) 

        LAZY LOAD
            const images = document.getElementById('images')
            const getImages = () => {
                axios('https://picsum.photos/v2/list?page=3&limit=5')
                    .then(res => {
                        const fragment = document.createDocumentFragment()
                        res.data.forEach(element => {
                            const newImage = document.createElement('IMG')
                            newImage.src = element.download_url
                            fragment.appendChild(newImage)
                        })
                        images.appendChild(fragment) //HSTA ACA ES TEMA VIEJO
                        setObserver()
                    })
            }

            const callback = (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        getImages() //aca hace que aparezcan todas las fotos denuevo al final, haciendo un bucle infinito 
                    } else {
                        //quitar animación
                    }
                })
            }

            const setObserver = () => {
                const options = {
                    threshold: 0.5
                }

                const observer = new IntersectionObserver(callback, options)
                observer.observe(images.lastElementChild)
            }

            getImages() 

API GEOLOCATION 
            tambien esta el metodo watch position pero funciona casi igual a getPosition

        const button = document.getElementById('button')

        button.addEventListener('click', ()=>{
            const geolocation = navigator.geolocation 
            geolocation.getCurrentPosition(GetPosition, error, options)
        })
        const options = {
            enableHIghAccuracy: true,
            timeout:5000,
            maximunAge:0 //tiempo que le permitiomos tener algo en cache, con ese 0 no tirara info cacheada sino en tiempo real
        }
        const getPosition = (position) => {
            console.log(position)
            console.log(object)

        }

        const error= (error) => console.log(error)
        
API MATCH MEDIA 
        esto no sirve apra reemplazar las mediaquerys de css 
        mql = window.matchMedia(mediaQueryString)
        mql viene de media query list, que es el objeto que se crea con el método matchMedia()
        mediaQueryString es cualquier media query válida en CSS
        */

        const title = document.getElementById('title')

        const mql = matchMedia('(min-width:400px) and (orientation: landscape)')

        const applyMatchMedia = mql => {
        mql.matches ?
            //NO HACER ESTO NUNCA :)
            //NO HACER ESTO NUNCA
            document.body.style.backgroundColor = 'red'
            //ESTO SI
            // title.classList.add('clase que sea')
            :
            //NO HACER ESTO NUNCA :)
            //NO HACER ESTO NUNCA
            document.body.style.backgroundColor = 'royalblue'
        }

        mql = matchMedia('(min-width:800px)')

        addEventListener('resize', (e) => {
        // if (innerWidth == '800') console.log(innerWidth)
        applyMatchMedia(mql)
        })
        addEventListener('resize', () => applyMatchMedia(mql))
        addEventListener('DOMContentLoaded', () => applyMatchMedia(mql)) //ESTO PARA ASEGURARTE DE QUE FUNCIONE SIEMPRE Y NO HAYA ERRORES

        applyMatchMedia(mql) 


DESTRUCTURING
        extraer datos de arrays y objetos
        estos dos formas 
        const{name: nombre,age: edad,email} = person 
        const{name,age,email} = person 

        con arrays
        const [primeraPosicion]=numbers
        o por ejemplo si quiero la tercera hago asi
        const [a,b,TerceraPosicion]=numbers //los nombres son a eleccion opio
        console.log(terceraPosicion)

            //esto imprime el nombre de person
        const print= ({name})=>{
            console.log(name)
        }
        printPerson(person)

        // destructuracion en las peticiones a traves de axios 
        //obvio importar libreria de axios en el html
        const getUsers= async () => {
            const {data:users} = await axios.get('url')
            console.log(users)
        }
        getUsers()

DEBUGGING 
        en el navegador pongo depurador que esta al lado de consola, es con F12
          en la parte de expresiones vigiladas (en chrome es watch) podes poner cosas como type of variable 
          y nos dice de que tipo es y asi tiene un monton de funciones

TRANSPILACION DE CODIGO CON BABEL 
        convertir en codigo valido para subir a un servidor 
        
        1. instalamos node 
        2. abrimos terminal nueva 
        3. inicio node en el proyecto (npm init -y)
        4. pongo esto en la hoja de codigo
        //npm install @babel/cli @babel/core @babel/polyfill @babel/present-env @babel/register gulp gulp-babel gulp-concat gulp-plumber gulp-uglify --save-dev
        5. creo dos archivos en la raiz del proyecto, el 1 gulpfile.babel.js 
        y le pongo 
        import gulp from "gulp"
        import babel from "gulp-babel"
        import concat from "gulp-concat"
        import uglify from "gulp-uglify"
        import plumber from "gulp-plumber"

        gulp.task("babel", ()=>{
            return gulp
                .src("dev/js/*.js") //ojo que es ruta de cad compu, hay que ver el nombre de mis carpetas
                .pipe(plumber())
                .pipe(
                    babel({
                        presets: ["@babel/preset-env"],
                    })
                )
                .pipe(concat("scripts-min.js"))
                .pipe(uglify())
                .pipe(gulp.dest("public/js"))
        })
        gulp.task("default", ()=>{
            gulp.watch("dev/js/*.js", gulp.series("babel"))
        })

    el otro archivo se tiene que llamar .babelrc 
    y adentro tiene 
        {
            "presets":[
                "@babel/presset-env"
            ] 
        }

    6. en la terminal pongo npm install -g gulp //si ya lo tengo no hace falta este paso
    7. lo que ponga en scripts.js se va a cambiar a un coso ya hecho para subir 
    8. tambien necesito el package.json de archivo si lo quiero para otro proyecto ademas de los dos creados en el paso 5. y pongo npm install en el proyecto nuevo.

