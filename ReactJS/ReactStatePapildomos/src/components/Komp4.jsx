import { useState } from "react";

const Komp4 = () => {
  const [scroll, setScroll] = useState("-----");
  const isvestiPozicija = (e) => {
    setScroll(e.target.scrollTop);
  };

  const tikrintiPozicija = (a) => {
    if (a > 200) {
      return `Jūs nuslinkote gana toli!`;
    }
  };

  return (
    <div>
      <h1>Komp4</h1>
      <h2>Scrollinimas</h2>

      <div onScroll={isvestiPozicija} className="divas">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet hic
        veniam laudantium eaque velit facilis sint qui eligendi quia veritatis
        porro omnis, animi ullam dolores fugiat, aliquid ipsa officia quidem.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
        excepturi ad eius voluptatum. Expedita, delectus saepe? Distinctio cum
        sunt ad voluptatem saepe quaerat, reprehenderit eligendi quasi
        consequatur harum dolores doloremque! Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Amet hic veniam laudantium eaque velit
        facilis sint qui eligendi quia veritatis porro omnis, animi ullam
        dolores fugiat, aliquid ipsa officia quidem. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Doloremque excepturi ad eius voluptatum.
        Expedita, delectus saepe? Distinctio cum sunt ad voluptatem saepe
        quaerat, reprehenderit eligendi quasi consequatur harum dolores
        doloremque! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Amet hic veniam laudantium eaque velit facilis sint qui eligendi quia
        veritatis porro omnis, animi ullam dolores fugiat, aliquid ipsa officia
        quidem. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Doloremque excepturi ad eius voluptatum. Expedita, delectus saepe?
        Distinctio cum sunt ad voluptatem saepe quaerat, reprehenderit eligendi
        quasi consequatur harum dolores doloremque! Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Amet hic veniam laudantium eaque velit
        facilis sint qui eligendi quia veritatis porro omnis, animi ullam
        dolores fugiat, aliquid ipsa officia quidem. Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Doloremque excepturi ad eius voluptatum.
        Expedita, delectus saepe? Distinctio cum sunt ad voluptatem saepe
        quaerat, reprehenderit eligendi quasi consequatur harum dolores
        doloremque! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Amet hic veniam laudantium eaque velit facilis sint qui eligendi quia
        veritatis porro omnis, animi ullam dolores fugiat, aliquid ipsa officia
        quidem. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Doloremque excepturi ad eius voluptatum. Expedita, delectus saepe?
        Distinctio cum sunt ad voluptatem saepe quaerat, reprehenderit eligendi
        quasi consequatur harum dolores doloremque!
      </div>
      <p>jusu scrollinimo pozicija: {scroll} </p>
      <div>
        <p>{tikrintiPozicija(scroll)}</p>
      </div>
    </div>
  );
};

export default Komp4;
