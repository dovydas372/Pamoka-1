import React from "react";

const Dekojame = (props) => {
  const atgalF = () => {
    props.atgal(false);
  };

  return (
    <div className="dekojame">
      <div>
        <lottie-player
          src="https://lottie.host/6ea2c4e3-153f-4b73-bc6e-3d1099c5dd2b/z2Qlhg4dsv.json"
          background="transparent"
          speed="1"
          style={{ width: "300px", height: "300px" }}
          direction="1"
          mode="normal"
          autoplay
        ></lottie-player>
      </div>
      <div>
        <h1>Dėkojame!</h1>
        <p>Artimiausiu metu su jumis susisieks mūsų vadybininkas.</p>
        <button onClick={atgalF}>Atgal</button>
      </div>
    </div>
  );
};

export default Dekojame;
