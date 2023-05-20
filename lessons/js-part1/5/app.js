// getMax()
// function -  declaration
function getMax(numbers) {
    var maxNum = numbers[0];
    for (var num of numbers){
        maxNum = maxNum > num ? maxNum : num
    }
    return maxNum

}
console.log(getMax([1, 2, 3, 4, 7, 9, 10]));

//hello();
//function-expression
var hello = function (){
    console.log('hi')
}
hello();

//функции с параметрами arguments(es5) b rest(es6+)
function getAllSum(){
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    var sum = Array.from(arguments).reduce((a, b) => a+=b );
    console.log(sum)
}
getAllSum(2, 3, 5, 6, 7);

//rest - параметр (es6+)
function getAllSum2(... args) {
    console.log(args)
    var sum = args.reduce((a, b) => a+=b );
    console.log(sum)
}
getAllSum2(2, 3, 5, 6, 7);

//es6+ syntex sugar
// 1) let, const
// var num;
// console.log(num);
var num = 5; //hoisting - всплытие 
console.log(num)


let str = 'frontend';
const name = 'Ruslan';
console.log(String)

//область видимости 
//1)глобальная область -  весь наш файл 
//2)функциональная область 

function getName() {
    let name = 'Aidana'
}
//3)Локальная(блочная)
{
    let String = 'sdfq'
}

//2) arrow fuction - стрелочная функция 
function getMax2(num1, num2){
    console.log(num1 > num2 ? num1 : num2);
}
getMax2(3, 7)

const getMaxNum = (n1, n2) => console.log(n1>n2 ? n1:n2)
getMaxNum(3, 9)

// 3) default params - параметры по умолчанию 
const sep= '|'
function pushJoin (Array, separator=sep){
    let result = '';
    for (let i = 0; i < Array.length; i++){
        const element = Array[i];
        result += element + (i === Array.length -1 ? ' ': separator);
    }
    return result
}

console.log(pushJoin([1, 2, 3, 4, 5, 6]))

//4) template str -  шаблонные

const name = 'Ruslan';
const surname = 'Ulanbek uulu';
const lastname = 'Ulanbekovich':








//анонимные функции 
function  say (){
    console.log('hi')
}

const func = function(){
    console.log('hello user')
}
func();

document.querySelector('.btn').addEventListener('click', function ())



