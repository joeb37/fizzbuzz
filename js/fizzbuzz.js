$(function(){

  var fizzBuzz = {
    logToConsole: false
  };

  var printFizzBuzz = function() {

    $("#resultsTableBody").empty();

    // Read user-entered limit value, clear the input field, and verify
    // it is a number we can work with.

    var limitStr = $("#limitInput").val();
    $("#limitInput").val("");
    var limit = parseInt(limitStr);

    if (isNaN(limit)) {
      alert("Please enter an integer value");
      return;
    }

    // Count up to the limit, replacing values with Fizz and Buzz as appropriate.
    var stringToOutput = "";
    var j = 1;
    for ( ; j <= limit; j++) {

      stringToOutput = "";

      if (j % 3 == 0 || j % 5 == 0) {
        if (j % 3 == 0 ) {
          stringToOutput = stringToOutput.concat("Fizz");
        }
        if (j % 5 == 0 ) {
          stringToOutput = stringToOutput.concat("Buzz");
        }
      } else {
        stringToOutput = "" + j;
      }

      $("#resultsTableBody").append("<tr><td>" + stringToOutput + "</td></tr>");

      if (fizzBuzz.logToConsole) {
        console.log(stringToOutput);
      }
    }
  };

  $("#goBtn").click(printFizzBuzz);

});
