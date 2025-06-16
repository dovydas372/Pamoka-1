"use strict";
const person1 = {
    name: "Jonas",
    age: 99,
    isEmployed: false,
    email: "sdasdAS@gmail.com",
};
const person2 = {
    name: "Jonas2",
    age: 992,
    isEmployed: true,
    email: "sdasdAS2222@gmail.com",
};
function printPersonalInfo(person) {
    console.log(person.name, person.age, person.email, person.isEmployed);
}
printPersonalInfo(person1);
printPersonalInfo(person2);
const products = [
    {
        id: 1,
        title: "Knyga",
        price: 15.99,
        inStock: true,
        category: "Literatūra",
    },
    {
        id: 2,
        title: "Pelė",
        price: 25.5,
        inStock: false,
        category: "Elektronika",
    },
    { id: 3, title: "Puodelis", price: 8.75, inStock: true, category: "Namai" },
    {
        id: 4,
        title: "Ausinės",
        price: 59.99,
        inStock: false,
        category: "Elektronika",
    },
];
function listAvailableProducts(products) {
    let isflitruotiProduktai = products.filter((product) => product.inStock == true);
    console.log(isflitruotiProduktai);
}
listAvailableProducts(products);
function banUser(user) {
    user.status = "banned";
    return user;
}
const userNew = {
    username: "hiden333",
    email: "dasdasd@gmail.com",
    status: "active",
};
console.log(banUser(userNew));
let suma = {
    name: "sudetis",
    operation(a, b) {
        return a + b;
    },
};
let atimtis = {
    name: "atimtis",
    operation(a, b) {
        return a - b;
    },
};
function skaiciuoti(op, a, b) {
    let symbol = "";
    switch (op.name) {
        case "sudetis":
            symbol = "+";
            break;
        case "atimtis":
            symbol = "-";
            break;
    }
    let result = op.operation(a, b);
    console.log(`${op.name}: ${a} ${symbol} ${b} = ${result}`);
}
skaiciuoti(suma, 1, 3);
skaiciuoti(atimtis, 4, 3);
const circle = {
    name: "Apskritimas",
    position: { x: 10, y: 15 },
    size: 5,
};
const square = {
    name: "Kvadratas",
    position: { x: 0, y: 0 },
    size: 4,
};
const triangle = {
    name: "Trikampis",
    position: { x: -5, y: 7 },
    size: 6,
};
function moveShape(shape, dx, dy) {
    let newPosition = {
        x: dx + shape.position.x,
        y: dy + shape.position.y,
    };
    shape.position = newPosition;
    return shape;
}
console.log(moveShape(circle, -2, 5));
let masyvas = [
    { id: 1, name: "pirmas" },
    { id: "abc123", name: "antas" },
    { id: 42, name: "trecias" },
    { id: "xyz789", name: "ketvirtas" },
    { id: 1, name: "paskutinis" },
];
function findEntityById(masyvas, id) {
    return masyvas.filter((entity) => entity.id == id);
}
console.log(findEntityById(masyvas, 1), "naujas clg");
