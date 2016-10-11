var bell = new Audio("../../media/bell.mp3");

$(document).ready(function(){
  var alarmCounter = 0;
  var alarmArray = [];
  $("#alarm-form").submit(function(event){
    event.preventDefault();
    $("#snooze").hide();
    $("#wakeup").empty();
    $("#snoozeBtn").hide();
    var input = $("#alarmTime").val();
    var alarmTime = moment(input, 'HH:mm:ss');
    if(moment().isAfter(alarmTime)){
      $("#display").text("Invalid input! Please enter a time after now");
    } else {
      var difference = alarmTime.diff(moment());
      $("#display").append("<p id='alarmDisplay" + alarmCounter + "'>Alarm set for: " + alarmTime.format('HH:mm:ss') + " <button class='btn btn-danger' id='timer"+ alarmCounter + "'>Delete Alarm</button></p>");
      $("#timer" + alarmCounter).click(function(){
        var position = parseInt($(this).attr("id").slice(-1));
        console.log(alarmArray[position]);
        $("#alarmDisplay" + position).remove();
        clearTimeout(alarmArray[position]);
      });
      var timer = setTimeout(function(){
        var index = alarmArray.indexOf(timer);
        $("#alarmDisplay" + index).remove();
        bell.play();
        $("#wakeup").html("<img src='../../media/wakeup.jpg' alt='alarm clock chasing hapless human'>");
        $("#snooze").show();
      }, difference);
      alarmArray.push(timer);
      alarmCounter++;
    }
  });
});
