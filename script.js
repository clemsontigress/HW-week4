$(document).ready(function(){

    var i = 0
    var score = 0;
    //var storedScores;
    //var scoreList = [];
    var quest = $("#question") 
    var ansOne = $("#answerOne")
    var ansTwo = $("#answerTwo")
    var ansThree = $("#answerThree")
    var ansFour = $("#answerFour")
    

    //Questions stored in object:
    var questions = [
        {
          title: "Commonly used data types DO NOT include:",
          choices: ["strings", "booleans", "alerts", "numbers"],
          answer: "alerts"
        },
        {
          title: "Inside which HTML element do we put the JavaScript?",
          choices: ["<javascript>", "<scriptor>", "<js>", "<script>"],
          answer: "<js>"
        },
        {
          title: "Where should you insert JavaScript?",
          choices: ["the <head>", "the bottom of the <body>", "anywhere in the HTML", "anywhere in the stylesheet"],
          answer: "the bottom of the <body>"
        },
        {
          title: "How do you write 'Hello World' in an alert box?",
          choices: ["msgBox('Hello World)", "alertBox('Hello World')", "alert('Hello World')", "msg('Hello World)"],
          answer: "alert('Hello World')"
        },
        {
          title: "How do you call a function called myFunction?",
          choices: ["myFunction()", "call myFunction()", "call function myFunction", "call select myFunction"],
          answer: "myFunction()"
        },
        {
          title: "How do you write an IF statement in JavaScript?",
          choices: ["if i = 5 or else", "if i = 5 then", "if i == 5 then", "if(i == 5)"],
          answer: "if(i == 5)"
        },
        {
          title: "How does a while loop start?",
          choices: ["while i between 0 and 10", "while (i <= 10; i++)", "while (i <= 10)", "while i <= 10"],
          answer: "while (i <= 10)"
        }
      ]
   
    //Timer function
    function setTime(){
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
            else if (i === questions.length) {
            clearInterval(myVar);
            };
        };
        return (myVar) 
    };

        //Start questions
        //grab question spot and make put in text

        function questionEnd() {
            var scoreTag = document.createElement("h1");
            var inputTag = document.createElement("input");
            var submitButton = document.createElement("button");
            score += secondsLeft * .1;
            score = score.toFixed(2);
            $("#question").text("Finished!");
            ansOne.remove();
            ansTwo.remove();
            ansThree.remove();
            ansFour.remove();
            document.body.children[1].appendChild(scoreTag);
            scoreTag.attr("id", "score");
            $("#score").text("Your Score: " + score);
            document.body.children[1].appendChild(inputTag);
            inputTag.attr("id", "input-field");
            submitButton.text("Submit");
            document.body.children[1].appendChild(submitButton);
        //submitButton.click(function (event) {
          //  event.preventDefault();
          //  var highScoreText = new Object();
          //  highScoreText.name = inputTag.value.trim();
          //  highScoreText.newScore = score;
          //  storeScores(highScoreText);
          //  window.location.href = "highScores.html";
           // });
        }
        
        function questionStart() { 
            
            answerOne.hidden = false;
            answerTwo.hidden = false;
            answerThree.hidden = false;
            answerFour.hidden = false;
            startButton.hidden = true
               
        if (i === questions.length) {
            questionEnd();
        }
        else {
        document.getElementById("question").textContent = questions[i]["title"];
        document.getElementById("answerOne").textContent = questions[i]["choices"][0];
        document.getElementById("answerTwo").textContent = questions[i]["choices"][1];
        document.getElementById("answerThree").textContent = questions[i]["choices"][2];
        document.getElementById("answerFour").textContent = questions[i]["choices"][3];
        };
    };
    
    $("#startButton").on("click", setTime);
    $("#startButton").on("click", questionStart);
    $("#startButton").on("click", function () {
        $(messageDiv).hide()});

    answerOne.hidden = true;
    answerTwo.hidden = true;
    answerThree.hidden = true;
    answerFour.hidden = true;


});



    

