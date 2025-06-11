interface Person {
  name: string;
  age: number;
  isEmployed: boolean;
  email: string;
}

const person1: Person = {
  name: "Jonas",
  age: 99,
  isEmployed: false,
  email: "sdasdAS@gmail.com",
};

const person2: Person = {
  name: "Jonas2",
  age: 992,
  isEmployed: true,
  email: "sdasdAS2222@gmail.com",
};

function printPersonalInfo(person: Person) {
  console.log(person.name, person.age, person.email, person.isEmployed);
}
printPersonalInfo(person1);
printPersonalInfo(person2);

/// antras

type product = {
  id: number;
  title: string;
  price: number;
  inStock: boolean;
  category: string;
};

const products: product[] = [
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

function listAvailableProducts(products: product[]) {
  let isflitruotiProduktai = products.filter(
    (product) => product.inStock == true
  );
  console.log(isflitruotiProduktai);
}

listAvailableProducts(products);

//trecias

type userStatus = "active" | "inactive" | "banned" | "deleted";

interface User {
  username: string;
  email: string;
  status: userStatus;
}

function banUser(user: User): User {
  user.status = "banned";

  return user;
}

const userNew: User = {
  username: "hiden333",
  email: "dasdasd@gmail.com",
  status: "active",
};

console.log(banUser(userNew));
