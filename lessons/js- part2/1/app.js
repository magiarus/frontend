const userAge = 22;
let copyUserAge = userAge;
copyUserAge = 30;
console.log(copyUserAge, userAge);

const userData = {
    userName: "tima",
    userAge: 22,
};
const shallowCopy = userData;
shallowCopy.userAge = 122;
console.log(shallowCopy, userData);

const trueCopy = {
    ...userData,
};
trueCopy.userAge = 1200;
console.log(shallowCopy, userData, trueCopy);

const person = {
    age: 22,
    name: "user"
}

const JSONStr = JSON.stringify(person);
console.log(person, JSONStr);

const parsedData = JSON.parse(JSONStr);
console.log(parsedData);

const factorial = (number) => {
    if (number === 1){
        return 1;
    }
    return number * factorial (number - 1);
};
const result = factorial(5);
console.log(result);


