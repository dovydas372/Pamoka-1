const CapsLockIspejimas = () => {
  const sk1Event = (e) => {
    let keyCode = e.nativeEvent.keyCode;

    if (keyCode == 20) {
      alert("ijungtas CAPSLOCK ");
    }
  };

  return (
    <div>
      <h1>CapsLockAtpazinimas</h1>

      <input type="text" onKeyDown={sk1Event} />
    </div>
  );
};

export default CapsLockIspejimas;
