//callback -функции 
const first = () => {
    console.log(1);
};

const second = ( ) => {
    console.log(2);
};
first()
second()
вариант 2 
const first1 = ()=> {
    setTimeout(()=>{
        console.log(1)
    } , 5000)
}

const second2 = () => {
    console.log(2);
};
 first1()
 second2()

 function getSquareNums (arr){
    const result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(arr[i] **2 );
    }
    return result;
 }
 const nums = [2, 6, 8];
 console.log(getSquareNums(nums));

 
 function getDivideNums (arr){
    const result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(arr[i] /2 );
    }
    return result;
 }
 const nums2 = [2, 6, 8];
 console.log(getDivideNums(nums2));

 этот же код через callback
 function doMatchSome (arr, instructions){
    const result = [];
    for(let i = 0; i < arr.length; i++){
        result.push( instructions(arr[i] ));
    }
    return result;
 } 
 function getSquared(num){
    return num ** 2;
 }
function getDivided(num2){
    return num2/2
}

 console.log(doMatchSome([6, 8, 54, 90], getSquared))
 console.log(doMatchSome([6, 8, 54, 90], getDivided))

 функция которая возвращает функцию 

 function getFullName(firstName){
    return function (lastName){
        return `Hello ${firstName} ${lastName}`
    }
 }
 const fullName = getFullName ('Ruslan');
 console.log(fullName)
 console.log(fullName('Ulanbek uulu'))

 //замыкание в функциях
function getUserProf(prof){
    const profession = prof.toUpperCase();
    return function (name) {
        return `${profession} ${name}`
    }
}
const profMale = getUserProf('Фронтенд - разработчик')
const profFemale = getUserProf('Фронтенд - разработчица')
console.log(profMale)
console.log(profFemale)
console.log(profMale('Дастан'))
console.log(profFemale('Алина'))

// работа с dom-элемент 
//создать div
const div = document.createElement('div')
//добавить к нему класс wrapper 
div.classList.add('wrapper')
//поместить внутри body 
// const body = document.querySelector('body')
const body = document.body
body.appendChild(div)
//создать заголовок 
const header = document.createElement('h1')
header.textContent= 'Dom-element'
//добавить заголовок перед div
div.insertAdjacentElement('beforebegin', header);
//создать список uд , добавить в него 3 элемента с текстом один два три
const ul = `
    <ul> 
    <li>one</li>
    <li>two</li>
    <li>three</li>
    <ul/>
`

div.innerHTML = ul;

const counter = document.querySelectorAll(".counter");
const incBtn = document.querySelector('.inkBtn');
const decBtn = document.querySelector('.decBtn')
const input = document.querySelector('input')

decBtn.addEventListener('click', function(){
    
})