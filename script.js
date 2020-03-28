$(document).ready(function(){


    $("#startButton").click(function(){
    //Timer function
    var myVar = setInterval(timeInterval, 1000)
    var secondsLeft = 5;  
        
        function timeInterval() {

         var timer = document.querySelector("#time");
         secondsLeft--;
         timer.textContent = "Time: " + secondsLeft; 

        //Stop timer
         if (secondsLeft === 0) {
            clearInterval(myVar);
            setTimeout(function() {alert("Time's Up!");}, 1000);
            }
            //else if (i === questions.length) {
            //clearInterval(timerInterval);
            //};
        };
        return (myVar) 
    });

    
});
