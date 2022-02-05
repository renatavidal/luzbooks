// ejercicios

//1
let nombre= prompt('nombre');
let edad= parseInt(prompt('edad'));

console.log(`Hola ${nombre}, tienes ${edad} a;os y el a;o que viene tendras ${++edad}`);

//2
let resultado=0;
let figura= prompt('que figura');
if(figura=='circulo'){
    let radio= prompt('radio');
    resultado= Math.Pi * (Math.pow(radio,2));
}
else{
    let altura = prompt('altura');
    let base = prompt('base');
    resultado = base*altura;
    if (figura== 'triangulo') resultado = resultado/2;
}
console.log(resultado);

//3
let numero = prompt('numero');
for (let index = 1; index < numero; index++) {
    if(index%2==0) console.log(` ${index} - es par`);
    else console.log(`${index} - es impar`);
}

//4 
 do{
    numero= parseInt(prompt('numero mayor que 1 y entero'));
 } while(numero<=1 || !numero.IsInteger());
 let es_primo=true;
 for (let index = 2; index < numero/2; index++) {
     if(numero%index ==0) es_primo=false;
 }
 let respuesta;
 if (es_primo==false) respuesta='no es primo';
 else respuesta='es primo';
 console.log(respuesta);

 //5

 let numero;
 do{
    numero= parseInt(prompt('n mayor que 0 plis y entero'));
 }while(numero<=0 || numero.IsInteger()==false);
 let resultado = 1;
 for (let index = numero; index > 0; index--) {
     resultado= resultado* index; //tambien result *=i;
 }

 //6
 let total=0;
 let nuevo=0;
 let i=0;
 while(total<=50){
     nuevo= parseInt(prompt('num')); //tambien total+= prompt
     total=total+nuevo;
     i++;
 }
console.log(` el total es ${total} y la cantidad de numeros introducidos es  ${i}`);

//7

let numeros=[1,2,3,4,5];
let impares=[];
let pares=[];
let contador=0;
let contador2=0;
let random=0;

for (let index = 0; index < numeros.length; index++) { // con for of se puede hacer
    random=(Math.random()*10);
    resultado= numeros[index] * random; 
    if (resultado%2==0){
        pares[contador]= resultado; //pares.push(result) tambien same con impares
        contador++;
    } 
    else{
        impares[contador2]= resultado;
        contador2++;
    } 
    console.log(`${numeros(index)} x ${random} = ${resultado}`);
}
    console.log(pares);
  //ASI SIN EL FOR IGUAL IMPRIME TODO
    console.log(impares);


//8
let letras=['a','b','c','d','e','f'];
let dni= 0;
do {
    dni= parseInt(prompt('dni'));  //tambien puedo hacer el parse int despues y preguntar dni.length >8
}while(dni>=100000000 || dni<0);
console.log(`la letra es ${letras[dni%23]}`);

//9
let palabra= prompt('palabra rey').toLowerCase; //acordate que es case sensitive

console.log(palabra.length);
let contador_vocales=0;
let constador_consonantes=0;
for (let index = 0; index < palabra.length; index++) { //for (const letra of palabra) era mas easy
    if(palabra(index)==a || palabra(index)==e ||palabra(index)==i ||palabra(index)==o ||palabra(index)==u) contador_vocales++;
    else contador_consonantes++;
}
console.log (` la cantidad de vocales es ${contador_vocales}, y la cantidad de consonantes es ${contador_consonantes}`);

//10
let esta=false;
let colores=["azul", "amarillo", "rojo", "verde", "rosa"];
let color= prompt('color').toLowerCase;
if(colores.indexOf(color) != -1) console.log('tu  color esta ');
else console.log('tu color no esta').



