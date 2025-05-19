import React from "react";
import { NavLink } from "react-router";

const Products = () => {
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

  return (
    <div>
      <h2>Products</h2>
      <div>
        {prekes.map((preke) => (
          <div key={preke.id}>
            <div>{preke.pavadinimas}</div>

            <NavLink to={"/product/" + preke.id}>plačiau</NavLink>
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
