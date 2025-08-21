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

//ketvirta

interface MathOperation {
  name: string;
  operation(a: number, b: number): number;
}

let suma: MathOperation = {
  name: "sudetis",
  operation(a: number, b: number): number {
    return a + b;
  },
};

let atimtis: MathOperation = {
  name: "atimtis",
  operation(a: number, b: number): number {
    return a - b;
  },
};

function skaiciuoti(op: MathOperation, a: number, b: number): any {
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

// Penkta

type Coordinates = {
  x: number;
  y: number;
};

interface Shape {
  name: string;
  position: Coordinates;
  size: number;
}

const circle: Shape = {
  name: "Apskritimas",
  position: { x: 10, y: 15 },
  size: 5,
};

const square: Shape = {
  name: "Kvadratas",
  position: { x: 0, y: 0 },
  size: 4,
};

const triangle: Shape = {
  name: "Trikampis",
  position: { x: -5, y: 7 },
  size: 6,
};

function moveShape(shape: Shape, dx: number, dy: number): Shape {
  let newPosition: Coordinates = {
    x: dx + shape.position.x,
    y: dy + shape.position.y,
  };
  shape.position = newPosition;

  return shape;
}

console.log(moveShape(circle, -2, 5));

// sesta

type ID = string | number;

interface Entity {
  id: ID;
  name: string;
}

let masyvas: Entity[] = [
  { id: 1, name: "pirmas" },
  { id: "abc123", name: "antas" },
  { id: 42, name: "trecias" },
  { id: "xyz789", name: "ketvirtas" },
  { id: 1, name: "paskutinis" },
];

function findEntityById(masyvas: Entity[], id: ID): Entity[] | undefined {
  return masyvas.filter((entity) => entity.id == id);
}

console.log(findEntityById(masyvas, 1), "naujas clg");
