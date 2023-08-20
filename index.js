let score = 0;

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
  document.querySelector("#hit").textContent = Math.floor(
    Math.random() * 10 + 1
  );
}

function runTimer() {
  let setTimer = 60;
  let timer = setInterval(function () {
    if (setTimer <= 0) {
      clearInterval(timer);
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

bubble_maker();
runTimer();
genHit();
incScore();
