const person = {
    userAge: 22,
    userName:"Tima",
};
const JSONPerson = JSON.stringify(person);
console.log(JSONPerson);

const parsedPerson = JSON.parse(JSONPerson);
console.log(parsedPerson);