let cluster = "";

for (let i = 0; i < 250; i++) {
  cluster += `<div class="bubble">${Math.floor(Math.random() * 10 + 1)}</div>`;
}

let btm_panel = document.querySelector("#panel_bottom");

btm_panel.innerHTML = cluster;
