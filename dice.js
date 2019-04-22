
var dice1 = 1 + Math.floor(Math.random() * 6);
alert(dice1);

var dice2 = 1 + Math.floor(Math.random() * 6);
alert(dice2);

if (dice1 > dice2) {
  alert("vince il primo giocatore");
} else if (dice1 < dice2) {
  alert("vince il secondo giocatore");
} else {
  alert("pareggio!")
}
