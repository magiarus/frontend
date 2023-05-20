// const userName = "Руслан"
// console.log("Привет,"+ userName + "! Как твои дела ?"); 

// //Шаблонные строки
// //шаблонные строки и интерпаляция
// console.log(`Привет,${userName}! Как твои дела ?`);

//===========6. Функции ============
 

const userName = "Ruslan"
function sayHi (){
    console.log(`Привет ,${userName} , дорогой пользователь `);
}
sayHi();


//function declaration 
function sayHi (){
    alert("Привет")
}
//function expression
const sayHi = function() {
    alert("Привет");
}