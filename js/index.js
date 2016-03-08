$(document).ready(function() {
  var calc = "";
  var ans = "";
  $('#total').val('0');
  $("button").click(function() {
    var next = $(this).attr("value");
    if (parseInt(next, 10) == next || next === "." || next === "/" || next === "*" || next === "-" || next === "+" || next === "%") {
      calc += next;
      $('#total').val(calc);
    } else if (next === "CLEAR") {
      calc = "";
      $('#total').val("0");
    } else if (next === "DEL") {
      calc = calc.slice(0, -1);
      $('#total').val(calc);
    } else if (next === "=") {
      calc = eval(calc);
      $('#total').val(calc);
      }
  });
});