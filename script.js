$(document).ready(function() {
    var seconds = 120;
    var interval = 0;

    
    function startTimer() {
        if (seconds === 120) {
          interval = setInterval(function () {
            seconds--;
    
            renderTime();
          }, 1000);
        }
      }

     


})