prompt("What's your name?");
prompt("What's thier name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 80) {
  alert("Your chance at love is " + loveScore + "%." + " You love each other like fish love water!");
} else {
  alert("Your chance at love is " + loveScore + "%.");
}
