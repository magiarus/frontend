const promise = fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => console.log(data))

console.log(promise);

const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json()
    console.log(data);

    return data;
};

const result = getData();
console.log(result);

result.then((data) => console.log(data));

const user = document.querySelector("#user")

const getUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    const userEmail = data[0]

    user.innerHTML = <li>${userEmail.name} (${userEmail.email})</li>;

};

const getUsers = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();
    let userListHTML = '';
    for (let i = 0; i < users.length; i++) {
        userListHTML += <li>${users[i].name} (${users[i].email})</li>;
    }

    user.innerHTML = userListHTML;
};
getUsers()
// getUser()
