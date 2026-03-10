let userScore=0;
let CompScore=0;

const choices =document.querySelectorAll(".choice");

const message= document.querySelector("#message");

const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#computer-score");

const genComputerChoice =() =>{
  const options=["rock","paper","scissor"];
  const randomIdx= Math.floor(Math.random()*3);
  return options[randomIdx];
};

const drawGame = () =>{
  console.log("game was draw.")
  message.innerText="Draw";
  message.style.backgroundColor ="black";

};

const showWinner =(userWin)=>{
  if(userWin){
  console.log("You win");
  message.innerText="You Won!";
  message.style.backgroundColor ="Green";
  userScore++;
  userScorePara.innerText= userScore;
  
}
else{
  console.log("You lose");
  message.innerText="You lose";
  message.style.backgroundColor ="red";
  CompScore++;
  compScorePara.innerText= CompScore;
}
};

const playGame =(userChoice) => {
  console.log("user choice =",userChoice);
  const compChoice=genComputerChoice();
  console.log("CPU choice =",compChoice);

  if(userChoice===compChoice){
    drawGame();
  }
  else{
    let userWin =true;
    if(userChoice==="rock"){
      userWin = compChoice==="paper" ? false:true;
    }
    else if(userChoice==="paper"){
      userWin = compChoice==="scissor" ? false:true;
    }else{
      userWin = compChoice==="rock" ? false:true;

    }
    showWinner(userWin);
  }

  
}

choices.forEach((choice) =>{
  choice.addEventListener("click",() =>{
    const userChoice = choice.getAttribute("id") ;
    console.log("Choice was clicked", userChoice);
    playGame(userChoice);
  });
});