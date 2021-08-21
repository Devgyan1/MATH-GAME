player1name=localStorage.getItem("player1");
 player2name=localStorage.getItem("player2");

 player1score=0;
 player2score=0;


document.getElementById("player1name").innerHTML=player1name+"=";
document.getElementById("player2name").innerHTML=player2name+"=";
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;
document.getElementById("playerque").innerHTML="question turn="+player1name;
document.getElementById("playerans").innerHTML="answer turn="+player2name;



function send() {
  number1=document.getElementById("number1").value;
  number2=document.getElementById("number2").value;
    actual_answer= parseInt(number1) * parseInt(number2);


question_number="<h4>" + number1 +" X " +number2 +"</h4>";
input_box ="<br> <h4>Answer :</h4><input type='text' id='input_check_box'>";
check_button ="<br><br><button class='btn btn-success' onclick='check()'>Check</button>";

row =question_number +input_box +check_button;
document.getElementById("output").innerHTML=row;

document.getElementById("number1").value ="";
document.getElementById("number2").value ="";

}

aturn="player1";
qturn="player2";

function check(){
  answer=document.getElementById("input_check_box").value;
  console.log("answer is" + actual_answer);
  if(answer==actual_answer){
      if(aturn=="player1"){
        player1score=player1score + 1;
          document.getElementById("player1score").innerHTML=player1score;
      }
      else{
        player2score=player2score + 1;
          document.getElementById("player2score").innerHTML=player2score;
      }
  }

  if(qturn=="player1"){
      qturn="player2";
      document.getElementById("playerque").innerHTML="Question Turn-" + player2name;
  }
  else{
      qturn="player1";
      document.getElementById("playerque").innerHTML="Question Turn-" + player1name;
  }


  if(aturn=="player1"){
      aturn="player2";
      document.getElementById("playerans").innerHTML="Answer Turn-" + player2name;
  }
  else{
      aturn="player1";
      document.getElementById("playerans").innerHTML="Answer Turn-" + player1name;
  }
  document.getElementById("output").innerHTML="";
}