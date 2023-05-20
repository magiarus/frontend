//строчный
//переменные  в js
//var names  = 'Ruslan'
//var surname = 'ulanbek uulu'
//camelcase
//var getUserId;
//console.log('мое фио - ' + names + ' ' + surname)


 //тип данных
 //1)string - строковый тип данных
 //var firstNumber = '1234567' ;
 //console.log(typeof firstNumber)
//2)number - числовой тип данных 
//var number2 = 1234567;
//console.log(typeof number2)

//var a = 12;
//var b = 34;
//математические действия 
//console.log('12 - 34 =', a - b);
//console.log('12 + 34 =', a + b);
//console.log('12 / 34 =', a / b);
//console.log('12 * 34 =', a * b);
//console.log('12 ** 34 =', a ** b);
//console.log('12 % 34 =', a % b);

//console.log('средний возраст группы 11-1F - ',((20 + 24 + 32 + 16 + 26 + 20)/6))
 
//prompt - модальная функция для взаимодействии с пользователи 
//var num1 = prompt( 'Введите первое число : ')
//var num2 = prompt( "Введите второе число : ")
//console.log('первое число - ' , num1)
//console.log('второе число - ' , num2)

//console.error('* =' , num1 * num2)
//3) boolean - логический тип данных . true or false
//условные операторы - if , else if , else
//var manOrWoman = true ;
//if(manOrWoman){
 //   console.log('дорогой');
//}else if(manOrWoman === false){
    //console.log('дорогая');
//}else{
    //console.log('оно')
//}

var name = prompt(  'введите свое имя: ')
var surname = prompt(  'введите свою фамилию: ')
var age = Number(prompt( 'введиете свой возраст '))
if(age <= 18){
    console.log('хай' , names)
}else if (age>=19 && age <= 40){
console.log('Здравствуйте! ', surname + ' ' + names)
}else if (age >= 41 && age <= 80){
    console.log('Добро Пожаловать! ', surname + ' ' + names)
}else{
    console.error('что-то пошло не так ! Введите возраст цифрами')
}