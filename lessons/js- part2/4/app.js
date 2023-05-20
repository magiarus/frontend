const promise = fetch("https://jsonplaceholder.typicode.com/posts")
.then((response)=>response.json())
.then((data) => console.log(data),2000)
.then((err) => console.log(err))
.finally(console.log("Loading end"));


console.log(promise);

const getData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        const resultsource = await getSource();

        console.log("block try", resultsource);
        return data;
    }catch (err) {
        console.log("Something has gone wrong", err);
    } finally {
        console.log("loading end 2");
    }
};
async function getSource() { 
    return "hello";
}
const result = getData().then((data) => console.log("last log", data));
console.log(result);

const getUsers = async () => {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const  data = await users.json();
    console.log(data[0]);
};
getUsers();
