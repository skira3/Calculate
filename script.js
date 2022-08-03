let p1=document.querySelector('p');
let plus=document.querySelector('.plus');
let num1=document.querySelector('.g1');
console.log(num1);
let num2=document.querySelector('.g2');
console.log(num2);
plus.addEventListener("click", function(){
      p1.innerHTML= Number(num2.value) + Number(num1.value);
})

// Найти первый input

// Добавить три кнопки (-, *, /) и подключить для них событие click


let w1=document.querySelector('.w1');
console.log(w1);

w1.addEventListener("click", function(){
        p1.innerHTML= Number(num2.value) - Number(num1.value);
})



let w2=document.querySelector('.w2');
console.log(w2);

w2.addEventListener("click", function(){
   p1.innerHTML= Number(num2.value) / Number(num1.value);
})




let w3=document.querySelector('.w3');
console.log(w3);

w3.addEventListener("click", function(){
    p1.innerHTML= Number(num2.value) * Number(num1.value);
})

// В тег p добавить ответ на +,/,*

// Добавить CSS, чтобы калькулятор стал красивым


