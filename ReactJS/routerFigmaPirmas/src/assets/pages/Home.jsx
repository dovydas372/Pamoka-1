import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="row1">
        <div className="container dflex">
          <div className="pav"></div>
          <div className="boxtext">
            <h2>Welcome to Manaus Hotel:</h2>
            <p>Your Gateway to Unmatched Comfort and Luxury</p>
            <div>
              <button>Contact us</button>
              <button>Bookings</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row2">
          <div className="texbox">
            <h2>Explore Our Hotel</h2>
            <p>Immerse Yourself in Luxury Amidst Nature's Tranquil Embrace</p>
          </div>
          <div className="pavs">
            <div className="pavcol1">
              <img src="src/assets/pav/balkonai.jpg" alt="" />
            </div>
            <div className="pavcol2">
              <img src="src/assets/pav/balkonai.jpg" alt="" />
              <img src="src/assets/pav/balkonai.jpg" alt="" />
            </div>
            <div className="pavcol3">
              <img src="src/assets/pav/balkonai.jpg" alt="" />
              <img src="src/assets/pav/balkonai.jpg" alt="" />
            </div>
          </div>
        </div>
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

export default Home;
