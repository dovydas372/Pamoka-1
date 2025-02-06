let a = 3;
let b = 4;
let c = 5;

console.log(Math.max(a, b, c));

console.log(Math.min(a, b, c));

let pazymys1 = 8;
let pazymys2 = 9;
let pazymys3 = 10;
let vid = (pazymys1 + pazymys2 + pazymys3) / 3;

if (vid >= 8 && vid <= 10) {
  console.log("vidurkis 8-10");
} else if (vid > 10 || vid < 0) {
  console.log("vidurkis neteisingas");
} else if (vid >= 5) {
  console.log("vidurkis 5-8");
} else if (vid < 5) {
  console.log("vidurkis <5");
}

if (a > b || a == 0) {
  console.log("pirmas skaičius yra didesnis už antrąjį arba yra lygus 0;");
} else {
  console.log("salyga neteisinga");
}

if (b > a || b == 5) {
  console.log("antras skaičius yra didesnis už pirmąjį arba yra lygus 5;");
} else {
  console.log("salyga neteisinga");
}

if (a > b && a == 20) {
  console.log("pirmas skaičius yra didesnis už antrąjį ir yra lygus 20;");
} else {
  console.log("salyga neteisinga");
}

if (b > a && b < 100) {
  console.log(
    "antras skaičius yra didesnis už pirmąjį ir yra mažesnis už 100;"
  );
} else {
  console.log("salyga neteisinga");
}
