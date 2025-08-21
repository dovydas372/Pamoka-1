import React from "react";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <>
      <div className="row1 about-row1">
        <img src="src/assets/pav/image1.png" alt="" />
        <img src="src/assets/pav/image1.png" alt="" />
        <img src="src/assets/pav/image1.png" alt="" />
      </div>

      <div className="row2 about-row2" style={{ width: "55%" }}>
        <h2>About Manaus Hotel</h2>
        <p>
          Manaus Hotel, signed by AMZ Arquitetos, is located near Amazonas
          Theater in the historic city center of Manaus (Brazil). The basic
          premises for developing the project was the renovation of an old house
          from the early 20th Century and the construction of a new attached
          building in the center of the block. The old house’s first floor was
          lowered to the street level to accommodate the hotel’s reception. Its
          walls’ paintings were scratched off revealing the raw conditions of
          the original stone arcs and bricks that supported the house’s wooden
          beams. In the upper floor (where its old rooms once were) is now
          located a restaurant that kept and recovered the original wooden floor
          and window frames of the house. For better preservation of the house’s
          original structure, all service areas (bar, kitchen, laundry) were
          placed in a new building construction. Still connected to the old
          house, it kept its same height creating a construction continuity.
          Occupying the center of the block, a new building for all the hotel’s
          dormitories was placed in the corner of the lot. The remaining space
          was occupied by the pool and garden creating a microclimate of their
          own (mild and shaded) and simulating the sensation of being in the
          middle of a tropical rainforest. Despite the building’s contemporary
          lines, it still created a changing dialogue with its surrounding
          historic center. The proportion of the window openings follow the
          rhythm of the nearby constructions. Furthermore, the preservation of
          the local atmosphere and culture were the starting point for the
          interior design. The bench’s and luminaires’ design, same use of
          colors, materials and preservation of original structure coverings all
          integrate with the old house’s style. Wooden and iron structure’s raw
          conditions blend with the indigenous basketry and regional crafting
          elements.
        </p>
      </div>
      <div className="row3">
        <div>
          <div className="container">
            <div className="textbox">
              <p>Do you like it ? Book Apartment now !</p>
              <button>Book Apartment</button>
            </div>
            <div></div>
          </div>
        </div>

        <div className="pav">
          <img src="src/assets/pav/balkonai.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
