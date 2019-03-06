$(function() {
    $("form").submit(function() { return false; });
});

function calculateResponseUsingAI() {
  var playerName = $("#playerName").val();
  var bothFirstAndLastNames = playerName.split(" ");

  if (playerName == undefined || playerName.length < 5 || bothFirstAndLastNames.length < 2) {
    alert("Please enter a player's name to check team fit.");
  } else {
    $.get('responses.txt', function(data) {
      var rows = data.split("\n").filter(function (el) {
        return el != "";
      });
      var row = rows[Math.floor(Math.random()*rows.length)];
      $("#response").text(row);
    }, 'text');
  }
};
