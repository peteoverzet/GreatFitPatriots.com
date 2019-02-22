(function () {
  $(document).ready(function () {
    var getResponse = function () {
      $.get('responses.txt', function(data) {
        var rows = data.split('\n');
        return rows[Math.floor(Math.random()*rows.length)];
      }, 'text');
    };

    var showResponse = function () {
      var response = getResponse();
      $("#response").innerHtml(response);
    };
  });
}());
