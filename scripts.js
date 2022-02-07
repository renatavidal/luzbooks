

button1= document.getElementById('myCheck');
button1.addEventListener('click',()=>{
    myFunction(button1)
});
button2= document.getElementById('myCheck2')
button2.addEventListener('click',()=>{
    myFunction(button2)
});
button3= document.getElementById('myCheck3');
button3.addEventListener('click',()=>{
    myFunction(button3)
});
button4= document.getElementById('myCheck4');
button4.addEventListener('click',()=>{
    myFunction(button4)
});
button5= document.getElementById('myCheck5');
button5.addEventListener('click',()=>{
    myFunction(button5)
});
function myFunction(checkBox) {
    const text = document.getElementById('text');
    console.log(checkBox.checked)
    console.log('hola')
    if (checkBox.checked == true){
        console.log('holi')
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
} 
//  var wow = new WOW(
//     {
//       boxClass:     'wow',      
//       animateClass: 'animated', 
//       offset:       0,         
//       mobile:       true,      
//       live:         true,       
//       callback:     function(box) {
//       },
//       scrollContainer: null 
//     }
//   );
//   wow.init();


//   <script>
// const button1= document.getElementById('myCheck');
// button1.addEventListener('click',myFunction(button1));
// const button2= document.getElementById('myCheck2');
// button2.addEventListener('click',myFunction(button2));
// const button3= document.getElementById('myCheck3');
// button3.addEventListener('click',myFunction(button3));
// const button4= document.getElementById('myCheck4');
// button4.addEventListener('click',myFunction(button4));
// const button5= document.getElementById('myCheck5');
// button5.addEventListener('click',myFunction(button5));

// function myFunction(checkBox) {
//   const text = document.getElementById('text');
//   if (checkBox.checked == true){
//     text.style.display = "block";
//   } else {
//     text.style.display = "none";
//   }
// }
// </script>
// <script>
// var wow = new WOW(
//          {
//            boxClass:     'wow',      
//            animateClass: 'animated', 
//            offset:       0,         
//            mobile:       true,      
//            live:         true,       
//            callback:     function(box) {
//            },
//            scrollContainer: null 
//          }
//        );
//        wow.init();
// </script>