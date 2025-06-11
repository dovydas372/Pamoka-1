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
