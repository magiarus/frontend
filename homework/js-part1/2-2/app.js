var days = 'Sunday'

switch (days) {
    case 'Monday' :
    case 'MONDAY' :
    case 'monday' :
        console.log('ПОНЕДЕЛЬНИК')
        break;
    case 'Tuesday' :
    case 'TUESDAY' :
    case 'tuesday' :
        console.log('ВТОРНИК')
        break;
    case 'Wednesday' :
    case 'WEDNESDAY' :
    case 'wednesday' :
        console.log('СРЕДА')
        break;
    case 'Thursday' :
    case 'THURSDAY' :
    case 'thursday' :
        console.log('ЧЕТВЕРГ')
        break;
    case 'Friday' :
    case 'FRIDAY' :
    case 'friday' :
        console.log('ПЯТНИЦА')
        break;
    case 'Saturday' :
    case 'SATURDAY' :
    case 'saturday' :
        console.log('СУББОТА')
        break;
    case 'Sunday' :
    case 'SUNDAY' :
    case 'sunday' :
        console.log('ВОСКРЕСЕНЬЕ')
        break;
    default:
        console.log('UNKNOW DAYS')
}