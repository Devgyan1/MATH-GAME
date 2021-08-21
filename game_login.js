function addUsr(){
    var p1name = document.getElementById("player1_name_input").value;
    var p2name = document.getElementById("player2_name_input").value;
    localStorage.setItem("player1", p1name);
    localStorage.setItem("player2", p2name);

    window.location="game.html";
}