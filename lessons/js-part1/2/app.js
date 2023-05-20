//повтор
//var userLogin = 'Ulanbek uulu';
//var userPassword = 'Ruslan2002';
//var loginInput = prompt('введите логин:');
//var passwordInput = prompt('введите пароль:');
//if(userLogin === loginInput && userPassword === passwordInput){
//    alert('авторизация прошла успешно, доступ разрешен!')
//}else{
//    alert('пользователь не найден, повторите попытку !')
//}

// var userINN = '22309200200758';
// var innFirstNumber =  Number(userINN[0])
// if((
//     innFirstNumber === 0 || innFirstNumber === 1 || innFirstNumber === 2) && userINN.length === 14){
//         console.log('INN is valid');
//     }else{
//         console.error('error')
//     }
    

    var size = 'm';
    var euSize = '0'
//     if(size === 's'){
//         console.log('европейский размер S - ', euSize = 36)
//     } else if (size === 'm'){
//         console.log('европейский размер M - ', euSize = 38)
//     }else if (size === 'L'){
//         console.log('европейский размер L - ', euSize = 40)
//     }else if (size === 'XL'){
//         console.log('европейский размер XL - ', euSize = 42)
//     }
    
    //switch..case
    switch(size) {
        case 'S':
        case 's':
            console.log('small')
            break;
        case 'M':
        case 'm':
        console.log('medium')
        break;
        case 'L':
        case 'l':
            console.log('lorge')
            break;
        default:
            console.log('errer')
    }

    // //NaN - not a number не число
    // console.log(typeof NaN)
    // //4) undefined - неопределенный тип данных
    // let names;
    // console.log(names)
    // //5) null - нулевой тип данных
    // var surname = null;
    // console.log(typeof null)
    //6) object - объект или комплексный тип данных
    var user = {
        namee: 'Ruslan',
        surname: 'Ulanbek uulu ',
        number: 996700653620,
        phoneNumber: null,
        isMarried: false,
        age: undefined,
        laptop:{
            model: 'huawei',
            cheap: 'd14',
            mous: false,
        },
        profession:{}
        //name:Aliya
    }
    console.log( typeof user)
    console.log( user.laptop.cheap)
    console.log( user.isMarried, user.phoneNumber)
    console.log( user.namee)

    /*
    * 3 класса (вида) операторов:
    *1)унарное операторы - + ( из строки  в число ), !(лог-ое не ), - (из полож число превращает в отриц )
    *2)бинарные операторы - &&, ||, ( прибавление )
    *3)тернарные операторы 
    * */

//true - white , false - black
    var playerColor = true;
    console.log(playerColor ? 'you start...' : 'wait your enemy')


    var man0rWomen = "true" 
    if(man0rWomen === true){ 
        console.log('Дорогой'); 
       }   else if (man0rWomen === false){ 
        console.log('Дорогая'); 
       }else{ 
        console.log('оно') 
       }
       //код выше с помощью тернарных операторов 
    var man0rWomen = "true" 
       var operation = man0rWomen ? 'дорогой' : 'Дорогая ';
       console.log(operation)