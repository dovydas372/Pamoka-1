import { Pica, PicaModelis } from "./models/Pica";

const rootElement = document.querySelector(".root")!;
const mygtukasPrideti = document.querySelector(
  `.pridetiPica`
) as HTMLInputElement;

function createPizzaTemplate(pica: PicaModelis): HTMLElement {
  const picaDiv = document.createElement("div");
  picaDiv.className = "pizza";
  picaDiv.innerHTML = `
   <h2 class="pavadinimas"> ${pica.pavadinimas}</h2>
   <p class="toppings">${pica.priedai.join(`,`)}</p>
   <p  class="aprasymas">${pica.aprašymas}</p>
   <p class="kaina">${pica.kaina}€</p>
    `;
  const button = document.createElement("button");
  button.textContent = "istrinti";
  button.onclick = function () {
    if (pica.id) {
      Pica.delete(pica.id).then(async () => {
        rootElement.innerHTML = "";
        const picos = await Pica.loadAlll();
        const picosSablonai = picos.map(createPizzaTemplate);
        renderTemplate(picosSablonai, rootElement);
      });
    }
  };
  picaDiv.append(button);
  return picaDiv;
}

mygtukasPrideti.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = `create.html`;
});

function renderTemplate(templates: HTMLElement[], parent: Element): void {
  for (const t of templates) {
    parent.appendChild(t);
  }
}

document.addEventListener(`DOMContentLoaded`, async () => {
  const picos = await Pica.loadAlll();

  const picosSablonai = picos.map((pica) => createPizzaTemplate(pica));

  renderTemplate(picosSablonai, rootElement);
});
