const person = {
    age: 22,
    name:"Tima",
};

const shallowCopy = person;
shallowCopy.age = 390;
console.log(person, shallowCopy);

const trueCopy = {
    ...person,
};

trueCopy.age = 90 ;
console.log(person, trueCopy);

const deepObject = {
    age: 22,
    name: "Tima", 
    car: {
        model:"Ferrari",
        year: 2021,
    },
};

const notDeepCopy = JSON.parse(JSON.stringify(deepObject));

notDeepCopy.car.model = "Lacceti"
notDeepCopy.age = 900;
console.log(deepObject, notDeepCopy);

const itemList = [
    {title: "Hello", descr: { title: "Hello"}, id:1},
    {title: "Hello", descr: { title: "Hello"}, id:2},
    {title: "Hello", descr: { title: "Hello"}, id:3},
    {title: "Hello", descr: { title: "Hello"}, id:4},
];

const copyItemList = itemList.map((item, idx) => ({
    ...item,
    label: `${idx + 1} ${item, title} id: ${item, id}`,

}));

console.log(copyItemList);
console.log(itemList);

const customMap = (arrayList, callback) => {
    const shallowCopy = [];

    for (let index in arrayList) {
        const changedItem = callback(arrayList[index], +index);
        shallowCopy.push(changedItem);
    }
    return shallowCopy;
};
const shallowCopyItem = customMap(itemList, (item, idx) => {
    return {
      ...item, 
      label: `${idx +1} ${item, litle} id: ${item, id}`,
    };
});

shallowCopyItem[0].descr.title = "Bye bye";
console.log("shallow copy --", shallowCopyItem, itemList);