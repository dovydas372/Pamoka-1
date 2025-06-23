const fs = require("fs");

fs.readFile("./tekstas.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

fs.writeFile("tekstas2.txt", "labas", () => {
  console.log("Failas sekmingai sukurtas");
});

fs.writeFile("tekstas2.txt", "labas rytas", () => {
  console.log("Failas sekmingai sukurtas");
});

fs.mkdir("./paslaugos", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("aplankas sukurtas");
});

console.log(fs.existsSync("./paslaugos"), "Aa");
