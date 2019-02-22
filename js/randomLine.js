(function () {
  $(document).ready(function () {
  });
}());

function getResponse() {
  $.get('responses.txt', function(data) {
    var rows = data.split('\n');
    return rows[Math.floor(Math.random()*rows.length)];
  }, 'text');
};

function showResponse() {
  var response = getResponse();
  $("#response").innerHtml(response);
};
