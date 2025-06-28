let hitt = 0;

function Makebubbles() {
  let frist = "";

  for (let i = 0; i <= 132; i++) {
    let a = Math.floor(Math.random() * 10);

    frist += `<div class="bubble">${a}</div>`;
  }

  document.querySelector("#pbotom").innerHTML = frist;
}
timer = 60;
function run() {
  let bob = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timex").textContent = timer;
    } else {
      clearInterval(bob);
      document.querySelector("#pbotom").innerHTML = `<h2>Game Over</h2> <button id ="rtry"> Retry</button>` ;
      document.querySelector("#rtry").addEventListener("click",function(){
        location.reload()
      })
    }
  }, 1000);
}

function hito() {
  hitt = Math.floor(Math.random() * 10);
  document.querySelector("#hit0").textContent = hitt;
}

let skre = 0;
function skr() {
  skre += 10;
  document.querySelector("#skore").textContent = skre;
}

document.querySelector("#pbotom").addEventListener("click", function (hit1) {
  let clickno = Number(hit1.target.textContent);
  if (clickno === hitt) {
    skr();
    Makebubbles();
    hito();
  }
});

run();
Makebubbles();
hito();

