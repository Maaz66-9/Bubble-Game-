function Makebubbles () {
let frist = "";

for (let i = 0; i <=132; i++) {
   
    let a =  Math.floor(Math.random()*10)
    
    frist +=  `<div class="bubble">${a}</div>`
}

document.querySelector("#pbotom").innerHTML = frist;
}
let timer = 60
function run()  {
    let bob = setInterval (function(){
        if (timer > 0){timer--;
document.querySelector("#timex").textContent = timer;}

  else {clearInterval(bob)};}, 1000)
    

}
run()
Makebubbles()