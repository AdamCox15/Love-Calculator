prompt("What's your name?");
prompt("What's thier name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
  alert("Your chance at love is " + loveScore + "%." + " You love each other like fish love water!");
}
if (loveScore > 30 && loveScore <= 70) {
     alert("Your chance at love is " + loveScore + "%.");
  }

if (loveScore <= 30) {
  alert("Your chance at love is " + loveScore + "%." + " You go together like oil and water!");
}
