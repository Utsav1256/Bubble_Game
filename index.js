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

bubble_maker();
runTimer();
