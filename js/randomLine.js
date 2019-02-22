(function () {
  $(document).ready(function () {
    $.get('responses.txt', function(data) {
      var rows = data.split('\n');
      rows[Math.floor(Math.random()*rows.length)];
    }, 'text');
  });
}());
