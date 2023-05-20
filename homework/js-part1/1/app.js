var day = Number (prompt('введите дату рождения'));
var month = prompt ('введите месяц рождения');
if ((day <= 21 && month === 'март')||
(day <= 20 && month === 'апрель')){
    console.log('ОВЕН');
}else if (
    (day <= 21 && month === 'апрель')||
    (day <= 20 && month === 'май')
){
    console.log('ТЕЛЕЦ');
} else if (
    (day <= 21 && month === 'май')||
    (day <= 20 && month === 'июнь')
){
    console.log('БЛИЗНЕЦЫ');
} else if (
    (day <= 21 && month === 'июнь')||
    (day <= 22 && month === 'июль')
){
    console.log('РАК');
} else if (
    (day <= 23 && month === 'июль')||
    (day <= 22 && month === 'август')
){
    console.log('ЛЕВ');
} else if (
    (day <= 23 && month === 'август')||
    (day <= 22 && month === 'сентябрь')
){
    console.log('ДЕВА');
} else if (
    (day <= 23 && month === 'сентябрь')||
    (day <= 22 && month === 'октябрь')
){
    console.log('ВЕСЫ');
} else if (
    (day <= 23 && month === 'октябрь')||
    (day <= 22 && month === 'ноябрь')
){
    console.log('СКОРПИОН');
} else if (
    (day <= 23 && month === 'ноябрь')||
    (day <= 21 && month === 'декабрь')
){
    console.log('СТРЕЛЕЦ');
} else if (
    (day <= 22 && month === 'декабрь')||
    (day <= 19 && month === 'январь')
){
    console.log('КОЗЕРОГ');
} else if (
    (day <= 20 && month === 'январь')||
    (day <= 19 && month === 'февраль')
){
    console.log('ВОДОЛЕЙ');
}else if (
    (day <= 20 && month === 'февраль')||
    (day <= 20 && month === 'март')
){
    console.log('РЫБЫ');
}