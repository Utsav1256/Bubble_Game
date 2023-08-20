let setTimer = 60;
let score = 0;
let hitRan = 0;

function bubble_maker() {
  let cluster = "";

  for (let i = 0; i < 250; i++) {
    cluster += `<div class="bubble">${Math.floor(
      Math.random() * 10 + 1
    )}</div>`;
  }

  let btm_panel = document.querySelector("#panel_bottom");

  btm_panel.innerHTML = cluster;
}

function genHit() {
  hitRan = Math.floor(Math.random() * 10 + 1);
  document.querySelector("#hit").textContent = hitRan;
}

function runTimer() {
  let timer = setInterval(function () {
    if (setTimer <= 0) {
      clearInterval(timer);
      document.querySelector(
        "#panel_bottom"
      ).innerHTML = `<h1>Game Over</h1> </br>
      <h2>Your Score : ${score}</h2>`;
      return;
    }
    setTimer--;
    document.querySelector("#timer").textContent = setTimer;
  }, 1000);
}

function incScore() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

document
  .querySelector("#panel_bottom")
  .addEventListener("click", function (details) {
    // console.log(Number(details.target.textContent));
    let clickedBubble = Number(details.target.textContent);
    if (hitRan === clickedBubble) {
      incScore();
      bubble_maker();
      genHit();
    }
  });

bubble_maker();
genHit();
runTimer();
