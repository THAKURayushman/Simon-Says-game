let h2 = document.querySelector("h2");
let Started = false;
let level = 0;
let colour = ["red", "yellow", "green", "blue"];
let body = document.querySelector("body");
let gameseq = [];
let userseq = [];
let scores = [];
let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");
let game = 0;
document.addEventListener("keydown", function () {
  if (Started == false) {
    Started = true;
    levelup();
  }
});
let btns = document.querySelectorAll(".btn");
for (click of btns) {
  click.addEventListener("click", btnpress);
  function btnpress() {
    console.log(this);
    let btn = this;
    let btnpressed = btn.getAttribute("id");
    userseq.push(btnpressed);
    console.log(userseq);
    userflash(btn);
    userseq.push;
    check(userseq.length - 1);
    console.log(ans);
  }
}
function levelup() {
  userseq = [];
  level++;
  h2.innerText = `level ${level}`;
  //choosing random button
  let randidx = Math.floor(Math.random() * 4);
  let btncolor = colour[randidx];
  gameseq.push(btncolor);
  console.log(gameseq);
  console.log(btncolor);
  let randbtn = document.querySelector(`.${btncolor}`);
  console.log(randbtn);
  gameflash(randbtn);
}

function gameflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 100);
}
function userflash(btn) {
  btn.classList.add("click");
  setTimeout(function () {
    btn.classList.remove("click");
  }, 100);
}
function check(idx) {
  if (userseq[idx] == gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelup(), 1000);
    }
  } else {
    h2.innerText = "GAME OVER! PRESS ANY KEY TO START AGAIN";
    h3.innerText = `Your score is : ${level - 1}`;

    h2.style.color = "red";
    body.classList.add("wrong");
    setTimeout(function () {
      body.classList.remove("wrong");
    }, 250);
    reset();
    scores.push(level - 1);
  }
}
function reset() {
  Started = false;
  userseq = [];
  gameseq = [];
  level = 0;
}
