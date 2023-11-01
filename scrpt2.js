let rock1 = document.querySelector("#rock1");
let papar1 = document.querySelector("#paper1");
let scissors1 = document.querySelector("#scissors1");
let body=document.querySelector('body')
let win=document.querySelector('.win')
let Player=document.querySelector('.Player1')
let comp=document.querySelector('.comp')

rock1.addEventListener("click", () => {
  Player.innerHTML=`<i class="fa-regular fa-hand-back-fist"></i>`
  console.log(getRandomInt(3));
  let compRock = getRandomInt(3);


  console.log(compRock);


  if (compRock === 1) {
    win.innerHTML=`Tie <i class="fa-solid fa-rotate-left"></i>`
    win.style.backgroundColor='blue'
    comp.innerHTML=`<i class="fa-regular fa-hand-back-fist"></i>`
  }
  if (compRock === 2) {
     win.innerHTML=`You Win <i class="fa-solid fa-trophy"></i>`
    win.style.backgroundColor='green'
    comp.innerHTML=`<i class="fa-regular fa-hand-scissors fa-rotate-90"></i>`

  }
  if (compRock === 0) {
    win.innerHTML=`You Lost <i class="fa-solid fa-heart-crack"></i>`
    win.style.backgroundColor='red'
    comp.innerHTML=`  <i class="fa-regular fa-hand"></i>`


  }


});

papar1.addEventListener("click", () => {
  Player.innerHTML=`<i class="fa-regular fa-hand"></i>`



    console.log(getRandomInt(3));
    let compPaper = getRandomInt(3);

  
    console.log(compPaper);
  

    if (compPaper === 1) {
    win.innerHTML=`Tie <i class="fa-solid fa-rotate-left"></i>`
    win.style.backgroundColor='blue'
    comp.innerHTML=`  <i class="fa-regular fa-hand"></i>`

    }
    if (compPaper === 2) {
     win.innerHTML=`You Win <i class="fa-solid fa-trophy"></i>`
    win.style.backgroundColor='green'
    comp.innerHTML=`<i class="fa-regular fa-hand-back-fist"></i>`

    }
    if (compPaper === 0) {
    win.innerHTML=`You Lost <i class="fa-solid fa-heart-crack"></i>`
    win.style.backgroundColor='red'
    comp.innerHTML=`<i class="fa-regular fa-hand-scissors fa-rotate-90"></i>`



    }



  });

  scissors1.addEventListener("click", () => {
    Player.innerHTML=` <i class="fa-regular fa-hand-scissors fa-rotate-90"></i>`
    console.log(getRandomInt(3));
    let compScissors = getRandomInt(3);


  
    console.log(compScissors);
  
  
    if (compScissors === 1) {
    win.innerHTML=`Tie <i class="fa-solid fa-rotate-left"></i>`
    win.style.backgroundColor='blue'
    comp.innerHTML=` <i class="fa-regular fa-hand-scissors fa-rotate-90"></i>`


    }
    if (compScissors === 2) {
     win.innerHTML=`You Win <i class="fa-solid fa-trophy"></i>`
    win.style.backgroundColor='green'
    comp.innerHTML=`  <i class="fa-regular fa-hand"></i>`


    }
    if (compScissors === 0) {
    win.innerHTML=`You Lost <i class="fa-solid fa-heart-crack"></i>`
    win.style.backgroundColor='red'
    comp.innerHTML=`<i class="fa-regular fa-hand-back-fist"></i>`


    }


  });
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
