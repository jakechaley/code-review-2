$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    // $("#char1, #char2, #char3, #char4, #char5").hide();
    const ageScore = parseInt($("input#age").val());
    

    event.preventDefault();
  });
});