const SimboliuSkaicius = () => {
  const sk1Event = (e) => {
    let laukoSimboliai = e.nativeEvent.target.value;
    console.log(laukoSimboliai.length);
  };

  return (
    <div>
      <h1>SimboliuSkaicius</h1>

      <input type="text" onInput={sk1Event} />
    </div>
  );
};

export default SimboliuSkaicius;
