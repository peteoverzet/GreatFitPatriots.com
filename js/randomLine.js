(function () {
  $(document).ready(function () {
    $.get('responses.txt', function(data) {
      console.log(data);
    }, 'text');
  });
}());
