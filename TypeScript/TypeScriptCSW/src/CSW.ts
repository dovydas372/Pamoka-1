import { appendFileSync } from "fs";

interface Mokejimas {
  id: number;
  suma: number;
  gavejas: string;
  paskirtis: string;
}

interface Darbuotojas {
  name: string;
  surname: string;
  age: number;
  exp: string;
}

type MokejimuStulpeliai = (`id` | `suma` | `gavejas` | `paskirtis`)[];

type DarbuotojoStulpeliai = (`name` | `surname` | `age` | `exp`)[];

class CSVWriter<T, G> {
  private csv: string;
  constructor(private stulpeliai: T) {
    this.csv = this.stulpeliai.join(`,`) + `\n`;
  }

  private formatuotiEilute(m: G): string {
    return this.stulpeliai.map((stul) => m[stul]).join(`,`);
  }

  pridėtiEilutę(values: G[]): void {
    let eilutes = values.map((v) => this.formatuotiEilute(v));
    this.csv += eilutes.join(`\n`);
    console.log(this.csv);
  }

  save(filename: string): void {
    appendFileSync(filename, this.csv);
    this.csv = `\n`;

    console.log(`File saved to`, filename);
  }
}

const write = new CSVWriter<MokejimuStulpeliai, Mokejimas>([
  `id`,
  `suma`,
  `gavejas`,
  `paskirtis`,
]);

const drabuotojas = new CSVWriter<DarbuotojoStulpeliai, Darbuotojas>([
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
