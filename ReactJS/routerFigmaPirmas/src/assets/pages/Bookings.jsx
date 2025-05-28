import React from "react";
import "./Bookings.css";
const Bookings = () => {
  const rooms = [
    {
      type: "Standard Room",
      price: 89,
      description:
        "A comfortable room with essential amenities, ideal for short stays. Includes a queen bed, Wi-Fi, and private bathroom.",
    },
    {
      type: "Superior Room",
      price: 119,
      description:
        "Spacious room with modern decor, work desk, and city view. Perfect for business travelers or longer stays.",
    },
    {
      type: "Deluxe Room",
      price: 149,
      description:
        "Elegant room with king-size bed, lounge area, and premium toiletries. Includes complimentary breakfast.",
    },
    {
      type: "Suite",
      price: 219,
      description:
        "Luxurious suite with separate living area, balcony, and jacuzzi. Offers the highest comfort and privacy for special occasions.",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row1 bookings-row1">
          <div>
            <h1>Rooms at Manaus Hotel</h1>
          </div>
          <div>
            <img src="src/assets/pav/image3.png" alt="" />
          </div>
        </div>
      </div>

      <div className="bookings-row2">
        <img src="src/assets/pav/image4.png" alt="" />
      </div>
      <div className="bookings-row3">
        <div className="container-bookings">
          {rooms.map((room, index) => (
            <div
              key={index}
              className={index % 2 == 0 ? "card  reverse" : "card"}
            >
              <div className="textbox">
                <div>
                  <h3>{room.type}</h3>
                  <p>{room.description}</p>
                  <h4>
                    {room.price} € <span>/Night</span>
                  </h4>
                </div>
                <div className="buttons">
                  <button>Book NOW</button>
                  <button>More details</button>
                </div>
              </div>
              <div className="image">
                <img
                  src={`src/assets/pav/image${
                    index + 1 == 4 ? 1 : index + 1
                  }.png`}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bookings;
