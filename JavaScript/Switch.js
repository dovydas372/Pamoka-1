let pasirinkimas = 2;

switch (pasirinkimas) {
  case 1:
    console.log("vartotojas laimėjo vandens.");
    break;
  case 2:
    console.log("vartotojas laimėjo limonadą.");
    break;
  case 3:
    console.log("vartotojas laimėjo arbatą.");
    break;
  case 4:
    console.log("vartotojas laimėjo kavą.");
    break;

  default:
    console.log("klaida");
    break;
}

let a = 1;
let b = 2;
let c = 3;

switch (a) {
  case 1:
    console.log(a + b + c);
    break;
  case 2:
    console.log(b * c);
    break;
  case 3:
    console.log(a * a);
    break;
  default:
    console.log("klaida");
    break;
}

let aa = "002";

switch (aa) {
  case "001":
    console.log("klaida1");
    break;
  case "002":
    console.log("klaida2");
    break;
  case "003":
    console.log("klaida3");
    break;
  default:
    console.log("klaida nezinoma");
    break;
}

let menesi = 10;

switch (menesi) {
  case 1:
  case 12:
  case 2:
    console.log("ziema");
    break;
  case 3:
  case 4:
  case 5:
    console.log("pavasaris");
    break;
  case 6:
  case 7:
  case 8:
    console.log("vasara");
    break;
  case 9:
  case 10:
  case 11:
    console.log("ruduo");
    break;
  default:
    console.log("tokio men nera");
    break;
}
