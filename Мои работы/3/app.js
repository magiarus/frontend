let counter = document.querySelectorAll('.counter')
for (let i = 0; i < counter.length; i++){
    counter [i].onclick = function (){
        let plusBtn = this.querySelector('.plus');
        let minusBtn = this.querySelector('.minus');
        let textField = this.querySelector('.input');
        let textFieldValue = +textField.value;

        plusBtn.onclick = function (){
            textField.value = textFieldValue + 1;

        plusBtn.onclick = function (){
            textField.value = textFieldValue - 1;
                
        }
    }
}