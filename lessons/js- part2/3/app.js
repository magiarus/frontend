fetch("https://jsonplaceholder.typicode.com/uers")
.then((Response) => {
    console.log(Response);
    if (!)
    return Response.json();
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log("My err:",err);
})