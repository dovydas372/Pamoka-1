"use strict";
let zmogus = {
    vardas: "tomas",
    metai: 21,
};
console.log("uzduotis 1", zmogus.vardas, zmogus.metai);
let antras = 1;
let antras2 = {};
let antras3 = [1, "n"];
let antras4 = "";
console.log("antra uzduotis:", typeof antras, typeof antras2, typeof antras3);
let trecias = "1";
let treciasAny = "3";
let treciasKitas = treciasAny;
console.log("trecia uzduotis:", typeof trecias, typeof parseInt(trecias), "treciasKitas:", typeof treciasKitas, treciasKitas, typeof treciasAny);
let masyvasKetvirtas = [];
masyvasKetvirtas.push(1, 2, 3, 5, 6);
console.log(masyvasKetvirtas);
console.log(masyvasKetvirtas.slice(0, 2));
