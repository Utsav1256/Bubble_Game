let cluster = "";

for (let i = 0; i < 140; i++) {
  cluster += `<div class="bubble">6</div>`;
}

let btm_panel = document.querySelector("#panel_bottom");

btm_panel.innerHTML = cluster;
