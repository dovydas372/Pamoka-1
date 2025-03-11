window.addEventListener("load", function () {
  let scoreBlock = document.querySelector(".main-game .score");
  let score = 0;
  let ownedFactories = [];

  document.querySelector(".main-game .click-zone").onclick = function () {
    score += 10;
    scoreBlock.innerText = score;
  };
  document.querySelectorAll(".factory").forEach(function (fc) {
    let factory = {
      title: fc.querySelector(".title").innerText,
      Cost: parseInt(fc.querySelector(".price").innerText),
      isAdding: parseInt(fc.querySelector(".adds").innerText),
      Count: parseInt(fc.querySelector(".count").innerText.slice(1, -1)),
      Button: fc.querySelector("button"),
    };
    factory.Button.onclick = function () {
      if (score >= factory.Cost) {
        score -= factory.Cost;
        factory.Count++;
        scoreBlock.innerText = score;
        fc.querySelector(".count").innerText = `(` + factory.Count + `)`;
      }
    };
    ownedFactories.push(factory);
  });
  console.log(ownedFactories);

  setInterval(function () {
    score += ownedFactories
      .map((x) => x.Count * x.isAdding)
      .reduce((partial_sum, number) => partial_sum + number, 0);

    scoreBlock.innerText = score;
  }, 1000);
});
