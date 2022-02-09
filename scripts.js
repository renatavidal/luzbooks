

button1= document.getElementById('myCheck');
button1.addEventListener('click',()=>{
    desplegar(button1)
});
button2= document.getElementById('myCheck2')
button2.addEventListener('click',()=>{
    desplegar(button2)
});
button3= document.getElementById('myCheck3');
button3.addEventListener('click',()=>{
    desplegar(button3)
});
button4= document.getElementById('myCheck4');
button4.addEventListener('click',()=>{
    desplegar(button4)
});
button5= document.getElementById('myCheck5');
button5.addEventListener('click',()=>{
    desplegar(button5)
});
function desplegar(checkBox) {
    const text = document.getElementById('text');
    console.log(checkBox.checked)
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
} 

// var buttonsubmit= document.getElementById('form');
// buttonsubmit.addEventListener('submit', ()=>{
//     buttonsubmit.submit();
//     buttonsubmit.reset();
//     return false;
// })