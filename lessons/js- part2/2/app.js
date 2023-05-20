// function TestTasks(){
//     console.log("Hello");
//     setTimeout(TestTasks, 0);
// }
// function testMicroTasks(n){
//     if(n === 1) return

//     Promise.resolve().then(() => testMicroTasks(n - 1))
// }

// document.write("Hello world from JS")

// TestTasks()

console.log('Client request... ');
console.log('loading started');


const promise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        const errorIndicator = false;

        if(!errorIndicator){
            const response = {
                status: 200,
                url: "https://example.com",
            };
            console.log("Response server...", response);
            console.log(("Preparing data..."));
            resolve(response);
        }else {
            reject("Something has gone wrong")
        }
    }, 2000);
});

promise.then((res) => {
    setTimeout(() => {
        const data = {
            username: "TIMA",
            userage: 22,
        };
        console.log("data is ready", data, res);
    }, 2000);
})
.catch((err) => {
    console.log("OOps sorry.", err);
}).finally(() => {
    console.log("loading end");
})