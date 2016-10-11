$(document).ready(function(){
  $('#time').text("It is " + moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
  setInterval(function(){
      $('#time').text("It is " + moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
  }, 1000);
});
