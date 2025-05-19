import { useParams, NavLink } from "react-router";

const Product = () => {
  const { indeksasID } = useParams();
  const prekes = [
    {
      id: 1,
      pavadinimas: "Lipnus rėmelis 30x22 cm",
      kaina: 4.99,
      kiekis: 12,
    },
    {
      id: 2,
      pavadinimas: "Aliumininis snap rėmelis A4",
      kaina: 7.49,
      kiekis: 5,
    },
    {
      id: 3,
      pavadinimas: "Plakato laikiklis su kabliukais",
      kaina: 3.25,
      kiekis: 20,
    },
  ];

  const preke = prekes.find((p) => p.id === parseInt(indeksasID));

  return (
    <div>
      <h2>Product </h2>
      {preke ? (
        <div>
          {preke.pavadinimas}, {preke.kaina} &euro;
          <NavLink to={"/products"}>Atgal</NavLink>
        </div>
      ) : (
        <div>Tokio produkto nera</div>
      )}
    </div>
  );
};

export default Product;
