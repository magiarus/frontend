document.querySelector('.addBtn').onclick =
    function () {
        if(document.querySelector('input').value === ''){
            alert('Please enter a task');
        } else{
            document.querySelector('.tasks').innerHTML +=`
             <div class="task">
                <span class="taskName">${document.querySelector('input').value}</span>
                <button class="delete">x</button>
        </div>`
        ////////////////delete task/////////////
        let deleteTask = document.querySelectorAll('.delete');
        for (let i =0; i < deleteTask.length; i++){
            deleteTask[i].onclick = function(){
                this.parentNode.remove()
            }
        }
        /////////done task/////////////
        let tasks = document.querySelectorAll('.taskName')
        for(let i=0; i<tasks.length; i++){
            tasks[i].onclick = function (){
                this.classList.toggle('completed')
            }
        }
        
        document.querySelector("input").value = "";

        }    
    }

    ///////классы в js

class Animal {
    constructor(options){
        this.name = options.name;
        this.age = options.age;
        this.color = options.color

    }
}
const cat = new Animal ( {
    name: 'Murka',
    age: 2,
    color:'brown'
})
console.log(cat)