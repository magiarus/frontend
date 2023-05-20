//filter
var users = [
    {id: 1, name: 'John', age:23},
    {id: 2, name: 'Adam', age:12},
    {id: 3, name: 'William', age:45},
    {id: 4, name: 'Oliver', age:32},
    {id: 5, name: 'Olivia', age:23},
];

var result = users.filter(user => user.name.includes('li'));
console.log(result)

printDelimiter();

//map 
var som = [ 200, 345, 675, 100, 21345, 12];
var dollar = som.map(i => i/85);
var fixDollar = dollar.map(i => i.toFixed(2))
console.log(dollar);
console.log(fixDollar)

printDelimiter();

//forEach
var numbers = [ 0, 1, 2, 3, 5, 6, 7,, 8, 9, 10];
numbers.forEach(function (num) {
    var result = num * num;
    console.log(`квадрат числа ${num} - ${result}`);

})
printDelimiter();

//some - every
var num = [1, 7, 3, 9 ];
var evenNam = num.every(n =>{
    return n % 2 !== 0
})
console.log(evenNam);

printDelimiter();

//for цикл с счетчиком
for ( var i=0; i <=12; i++){
    var month;
    var currentMonth = new Date().getMonth() +1;
    if (currentMonth === i) continue;
    switch(i){
        case 1:
            month = 'January';
            break;
        case 2:
            month = 'February';
            break;
        case 3:
            month = 'March';
            break;
        case 4:
            month = 'April';
            break;
        case 5:
            month = 'May';
            break;
        case 6:
            month = 'June';
            break;
        case 7:
            month = 'July';
            break;
        case 8:
            month = 'August';
            break;
        case 9:
            month = 'September';
            break;
        case 10:
            month = 'October';
            break;
        case 11:
            month = 'November';
            break;
        case 12:
            month = 'December';
            break;
    }
    console.log((i === 1 ? 'Year starts with': 'Then') +month);
}

printDelimiter();
//for..of
var newWord = '';
for (var letter of 'frontend'){
    newWord += letter+ '-';
}
console.log(newWord)

printDelimiter();

var fruits = ['apple', 'cherry', 'melon', 'lemon'];
for(var fruit of fruits){
    console.log(fruit.toUpperCase()); //toLowerCase- маленькие буквы 
}



var auto = {
    name: 'BMW',
    year: 2022,
    color: 'white'
}



// for (var car of Object.keys(auto)){
//     console.log(car)
// }

printDelimiter();

//for..in

for(var car in auto){
    console.log(car);
}
printDelimiter();
//работа на удаление дубликатов 
//первый вариант решения
var array = [1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 8, 9, 12, 23, 23, 23, 0, 0, 56, 56];
var arr = [];
for (var n of array){
    if(arr.includes(n)) continue
    arr.push(n)
}
console.log(array)
console.log(arr);

printDelimiter();
//второй вариант 
var arr2 = Array.from (new Set(array))
console.log(arr2)

printDelimiter();

//функции
function  sayHello() {
    console.log('Hello world')
}
sayHello()
function printDelimiter() {
    console.log('-'. repeat(28))
}
printDelimiter();


['div', 'li', 'div', 'p', 'p', 'h1','h1','h1']



    

