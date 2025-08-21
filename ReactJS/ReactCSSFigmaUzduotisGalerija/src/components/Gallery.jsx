import { useState } from "react";
import "./Gallery.css";
const Gallery = () => {
  const [mainImg, setMainImg] = useState(0);
  const images = ["img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.png"];

  const prev = () => {
    if (mainImg > 0) {
      setMainImg(mainImg - 1);
    } else {
      setMainImg(images.length - 1);
    }
  };
  const next = () => {
    if (mainImg < images.length - 1) {
      setMainImg(mainImg + 1);
    } else {
      setMainImg(0);
    }
  };
  return (
    <div className="gallery">
      <div className="mainPhoto">
        {<img src={"./src/assets/Images/" + images[mainImg]} alt="" />}

        <div className="buttons">
          <button onClick={prev} className="prev">
            <svg
              width="41"
              height="39"
              viewBox="0 0 41 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="20"
                cy="19.1667"
                rx="20"
                ry="19.1667"
                transform="matrix(-1 0 0 1 40.9851 0)"
                fill="#F4BF03"
              />
              <g clip-path="url(#clip0_0_1)">
                <path
                  d="M23.4851 12.75L17.2351 19L23.4851 25.25"
                  stroke="#252525"
                  stroke-opacity="0.8"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_1">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="matrix(-1 0 0 1 30.9851 9)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button onClick={next} className="next">
            <svg
              width="41"
              height="39"
              viewBox="0 0 41 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="20.015"
                cy="19.1667"
                rx="20"
                ry="19.1667"
                fill="#F4BF03"
              />
              <g clip-path="url(#clip0_0_1)">
                <path
                  d="M17.515 12.75L23.765 19L17.515 25.25"
                  stroke="#252525"
                  stroke-opacity="0.8"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_1">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(10.015 9)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>

      <div className="navigation">
        {images.map((pav, index) => (
          <div key={index}>
            <img src={"./src/assets/Images/" + pav} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
