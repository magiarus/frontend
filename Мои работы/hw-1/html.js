// const input = document.querySelector('input');
// input.addEventListener('input', onInput);



function phoneNumber(myPhone) {
    var re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    var myPhone = document.getElementById('phone').value;
    var valid = re.test(myPhone);
    if (valid) output = 'Номер телефона введен правильно!';
    else output = 'Номер телефона введен неправильно!';
    document.getElementById('message').innerHTML = document.getElementById('message').innerHTML+'<br />'+output;
    return valid;
} 


function ValidPhone() {
    var re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    var myPhone = document.getElementById('phone').value;
    var valid = re.test(myPhone);
    if (valid) output = 'Номер телефона введен правильно!';
    else output = 'Номер телефона введен неправильно!';
    document.getElementById('message').innerHTML = document.getElementById('message').innerHTML+'<br />'+output;
    return valid;
}  
 
 

// const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

// const input = document.querySelector('input');

// function onInput() {
//   if (isEmailValid(input.value)) {
//     input.style.borderColor = 'green';
//   } else {
//     input.style.borderColor = 'red';
//   }
// }

// input.addEventListener('input', onInput);

// function isEmailValid(value) {
// return EMAIL_REGEXP.test(value)
// }


