var userScore = 0;
var computerScore = 0;
var userScore = document.getElementById("user-score");
var computerScore = document.getElementById("computer-score");
var result = document.querySelector(".result-message");
var initial =document.querySelector(".initial");
var final =document.querySelector(".final");
var userResult=document.getElementById("user-move");
var computerResult=document.getElementById("computer-move");
var message=document.getElementById("message");
var u=0;
var c=0;

for (var i = 0; i < 3; i++) {
  document.querySelectorAll(".images")[i].addEventListener("click", function() {

    var computerMove = Math.ceil(Math.random() * 3);

    switch (computerMove) {
      case 1:
        computerMove="rock";
        break;
      case 2:
        computerMove="paper";
        break;
      case 3:
        computerMove="scissor";
        break;

      default:
         result.innerHTML="ERROR 404";
    }
  var userMove=this.id;
    if(userMove=="rock"){
       if(computerMove=="paper"){
          result.innerHTML="YOU LOSE😢";
          c++;
          computerScore.innerHTML=c;
       }
       if(computerMove=="scissor"){
          result.innerHTML="YOU WON😍";
          u++;
          userScore.innerHTML=u;
       }
       if(computerMove=="rock"){
          result.innerHTML="It's a DRAW";

       }

    }
    if(userMove=="paper"){
      if(computerMove=="scissor"){
         result.innerHTML="YOU LOSE😢";
         c++;
         computerScore.innerHTML=c;
      }
      if(computerMove=="rock"){
         result.innerHTML="YOU WON😍";
         u++;
         userScore.innerHTML=u;
      }
      if(computerMove=="paper"){
         result.innerHTML="OOPS!! It's a DRAW";

      }

    }
    if(userMove=="scissor"){
      if(computerMove=="rock"){
         result.innerHTML="YOU LOSE😢";
         c++;
         computerScore.innerHTML=c;
      }
      if(computerMove=="paper"){
         result.innerHTML="YOU WON😍";
         u++;
         userScore.innerHTML=u;
      }
      if(computerMove=="scissor"){
         result.innerHTML="OOPS!! It's a DRAW";

      }

    }
    userResult.src="images/" +userMove +".png";
    computerResult.src="images/" +computerMove +".png";
    initial.style.display="none";
    final.style.display="flex";
    message.innerHTML="FINAL RESULT";


    setTimeout(()=>{
      final.style.display="none";
      initial.style.display="flex";
      message.innerHTML= "CHOOSE AGAIN TO PLAY FURTHER";
      result.innerHTML="PLAY AGAIN"
    },5000);


  });
}
