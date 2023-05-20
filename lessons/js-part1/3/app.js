//7) symbol, 8) bigint
//var num = 3n;
// console.log(typeof num)

// 1) truthy and falsy - вырожения 
//falsy - '' ,  "" , false , 0 , undefined , null , NaN, -0, 0n
//true - "number", 234


// var isResdy = 1 ;
// console.log(isResdy ? 'truthy - вырожение' : 'falsy - вырожение')

// //array -массив

// var numbers = [2, 3, 4, 9, 6, 9, 1]
// //             0  1  2  3  4  5  6 
// console.log(numbers)
// console.log(numbers[5])

// //console.log(typeof numbers)
// var others = [
//     1,
//      '',
//      'hello',
//      null,
//      undefined, 
//      {
//         names:'Ruslan',
//         surname:'Ulanbek'
//      }
// ]
// console.log(others);


//методы массивы
//var fruits = ['banana', 'orenge', 'pineapple', 'raspberry'];
//var firstsFruits = fruits.shift();
//console.log(firstFruit);
//console.log(fruits.length - 1 )
//fruits.push('apple' , 'melon') //добавляет элементы в конец массива 
//fruits.unshift('apple', 'melon') // добавляет элементы в начало массива 
//fruits.splice( 0 , 2 ) // удаляет элементы по индексу







// var matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(matrix[2][1])

//циклы while, do..while
// var fruits = ['banana', 'orenge', 'pineapple', 'raspberry'];
// var fruitForFound = 'raspberry'
// var i = 0;
// while(i < 4){
//    // тело цикла
//     if (fruits[i] === fruitForFound)
//         console.log('фрукт был найден под индексом', i );
//         i++
//     }

// //цикл do..while
// var num = 0;
// do{
//     num++
//     console.log(num)
// }while (num<10)

//цикл for
var names = ['тимур', 'ruslan','витя', 'ден']
var blacklist = ['ruslan', 'rus', 'rusi', 'руся']
for (var i = 0; i < names.length; i++){
    if (blacklist.includes(names[i].toLowerCase())){
        console.warn(`имя${names[i]} есть в черном списке`)
    }
    console.log(`добро пожаловать ${names[i]}`);
}

var users = [
{
    names: 'Jack',
    salary: 1350
},
{
    names: 'John',
    salary: 965
},
{
    names: 'Jesika',
    salary: 1200
},
{
    names: 'Jane',
    salary: 300
},
{
    names: 'jamalidin',
    salary: 1001
}

]

var filteredUser = users.filter(user => user.salary >= 1000);
var filteredUser2 = users.filter(user => user.salary <= 1000);
console.log(filteredUser);
console.log(filteredUser2);
