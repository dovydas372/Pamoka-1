import { PicaModelis, Pica } from "./models/Pica";

const titleInput = document.querySelector(
  `input[name="pavadinimas"]`
) as HTMLInputElement;

const descriptionInput = document.querySelector(
  `textarea`
) as HTMLTextAreaElement;

const form = document.querySelector(`.create`) as HTMLFormElement;

form.addEventListener(`submit`, async (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const naujaPica: PicaModelis = {
    pavadinimas: data.get(`pavadinimas`) as string,
    aprašymas: data.get(`aprasymas`) as string,
    priedai: data.getAll(`priedai`) as string[],
    kaina: parseInt(data.get(`kaina`) as string),
  };
  if (
    naujaPica.pavadinimas &&
    naujaPica.aprašymas &&
    naujaPica.priedai &&
    naujaPica.kaina
  ) {
    const res = await Pica.save(naujaPica);
    if (!res.ok) {
      console.log(`nepavyko issaugoti sios picos.`);
    }
    if (res.ok) {
      window.location.href = `index.html`;
    }
  } else {
    alert("neivesti visi langai");
  }
});
