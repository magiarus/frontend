const cols = document.querySelectorAll('.col'); 

 document.addEventListener('keydown' , (event )=>{
    //console.log(event.code);
    if(event.code.toLowerCase() === 'space'){
        setRandomColor()
    }
 })
 
document.addEventListener('click', (event) =>{
    const type = event.target.dataset.type
    if(type === 'lock'){
        const node = event.target.tagName.toLowerCase() === 'i'
            ? event.target : event.target.children[0]
        node.classList.toggle('fa-lock-open')
        node.classList.toggle('fa-lock')
    }
})





   
//функция для генерации рандомного цвета 
function generateRandomColor(){ 
//rgb #FFFFFF, #FF56FF 
const randColor = '0123456798ABCDEF' 
let color = ''; 
for(let i = 0; i < 6; i++){ 
    color += randColor[Math.floor(Math.random() * randColor.length)] 
} 
return '#' + color 
} 
 
 
function setRandomColor(){ 
    cols.forEach(col => { 
        const color = generateRandomColor(); 
        // const color = chroma.random(); 
        const isLocked = col.querySelector('i').classList.contains('fa-lock')
        if(isLocked){
            return
        }
        const text = col.querySelector('h2') 
        const button = col.querySelector('button') 
        col.style.background = color 
        text.textContent = color
        setTextColor(text, color); 
        setTextColor(button, color) 
    }) 
} 
 
function setTextColor(text, color){ 
    const lum = chroma(color).luminance() 
    text.style.color = lum > 0.5 ? 'black' : 'white' 
    
} 
 
setRandomColor();