"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class CSVWriter {
    constructor(stulpeliai) {
        this.stulpeliai = stulpeliai;
        this.csv = this.stulpeliai.join(`,`) + `\n`;
    }
    formatuotiEilute(m) {
        return this.stulpeliai.map((stul) => m[stul]).join(`,`);
    }
    pridėtiEilutę(values) {
        let eilutes = values.map((v) => this.formatuotiEilute(v));
        this.csv += eilutes.join(`\n`);
        console.log(this.csv);
    }
    save(filename) {
        (0, fs_1.appendFileSync)(filename, this.csv);
        this.csv = `\n`;
        console.log(`File saved to`, filename);
    }
}
const write = new CSVWriter([
    `id`,
    `suma`,
    `gavejas`,
    `paskirtis`,
]);
const drabuotojas = new CSVWriter([
    `name`,
    `surname`,
    `age`,
    `exp`,
]);
drabuotojas.pridėtiEilutę([
    { name: "Jonas", surname: "Jonaitis", age: 35, exp: "expert" },
]);
write.pridėtiEilutę([
    { id: 1, suma: 5, gavejas: `string`, paskirtis: `string` },
    { id: 2, suma: 5, gavejas: `string`, paskirtis: `string` },
    { id: 3, suma: 5, gavejas: `string`, paskirtis: `string` },
    { id: 4, suma: 5, gavejas: `string`, paskirtis: `string` },
]);
write.save(`./dist/mokejimai.csv`);
drabuotojas.save(`./dist/darbuotojai.csv`);
