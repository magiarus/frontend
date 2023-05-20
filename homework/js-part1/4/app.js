let arr = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']
let li = 0 ;
let h3 = 0 ;
let a = 0;
let div = 0;
let span = 0;

for (let i = 0; i<arr.length;i++){
    if(arr[i]=="li"){
        li+=1
    }
    else if (arr[i]=="h3"){
        h3+=1
    }
    else if (arr[i]=="a"){
        a+=1
    }
    else if (arr[i]=="div"){
        div+=1
    }
    else if (arr[i]=="span"){
        span+=1
    }
}
console.log({
    a:a,
    span:span,
    h3:h3,
    li:li,
    div:div
});

