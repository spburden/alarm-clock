var bell = new Audio("../../media/bell.mp3");

$(document).ready(function(){
  var snoozeCounter = 0;
  $("#snooze-form").submit(function(event){
    event.preventDefault();
    snoozeCounter++;
    if(snoozeCounter < 3){
      var snoozeTime = parseInt($("#snoozeTime").val());
      $("#display").text("snoozing for " + snoozeTime + " minutes");
      $("#wakeup").empty();
      $("#snooze").hide();
      bell.pause();
      setTimeout(function(){
        bell.play();
        $("#wakeup").html("<img src='../../media/wakeup.jpg' alt='alarm clock chasing hapless human'>");
        $("#snooze").show();
      }, snoozeTime*60*1000);
    } else {
      bell.play();
      $("#display").text("You've already snoozed " + snoozeCounter + " times! Wake up already!");
      $("#snooze").hide();
    }
  });
});
