import { Pica, PicaModelis } from "./models/Pica";

const rootElement = document.querySelector(".root")!;
const mygtukasPrideti = document.querySelector(
  `.pridetiPica`
) as HTMLInputElement;
function createPizzaTemplate(pica: PicaModelis): string {
  return `
   <div class="pizza">

   <h2 class="pavadinimas"> ${pica.pavadinimas}</h2>
   <p class="toppings">${pica.priedai.join(`,`)}</p>
   <p  class="aprasymas">${pica.aprašymas}</p>
   <p class="kaina">${pica.kaina}€</p>
   
   </div> 
    `;
}

mygtukasPrideti.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = `create.html`;
});

function renderTemplate(templates: string[], parent: Element): void {
  const templateElement = document.createElement(`template`);
  for (const t of templates) {
    templateElement.innerHTML += t;
  }
  parent.append(templateElement.content);
}

document.addEventListener(`DOMContentLoaded`, async () => {
  const picos = await Pica.loadAlll();
  console.log(picos);

  const picosSablonai = picos.map(createPizzaTemplate);
  renderTemplate(picosSablonai, rootElement);
});
