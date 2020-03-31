$(document).ready(function(){

    var i = 0
    var score = 0;
    var secondsLeft = 60
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
          title: "How do you declare a JavaScript variable?",
          choices: ["var carName", "v carName", "variable carName", "function carName()"],
          answer: "var carName"
        },
        {
          title: "How do you write an IF statement in JavaScript?",
          choices: ["if i = 5 or else", "if i = 5 then", "if i == 5 then", "if(i == 5)"],
          answer: "if(i == 5)"
        },
        {
          title: "How does a for loop start?",
          choices: ["for (i = 0; i <= 5; i++)", "for (i <= 5; i++)", "for i = 1 to 5", "for (i=0; i <=5 )"],
          answer: "for (i = 0; i <= 5; i++)"
        }
      ]
   
    //Timer function
    function setTime(){
    var myVar = setInterval(timeInterval, 1000)
    var secondsLeft = 60;  
        
        function timeInterval() {

         var timer = document.querySelector("#time");
         secondsLeft--;
         timer.textContent = "Time: " + secondsLeft; 

        //Stop timer
         if (secondsLeft === 0) {
            clearInterval(myVar);
            setTimeout(function() {alert("Time's Up!");}, 1000);
            questionEnd();}
            else if (i === questions.length) {
            clearInterval(myVar);
            };
        };
        return (myVar) 
    };

        //Start/End questions
        function questionEnd() {
            var scoreTag = document.createElement("h1");
            var inputTag = document.createElement("input");
            var submitButton = document.createElement("button");
            $("#question").text("Finished!");
            ansOne.remove();
            ansTwo.remove();
            ansThree.remove();
            ansFour.remove();
            document.body.children[1].appendChild(scoreTag);
            document.getElementsByTagName("h1")[0].setAttribute("id", "score");
            document.getElementById("yourScore").textContent = "Your Score: " + score;
            document.body.children[3].appendChild(inputTag);
            document.getElementsByTagName("input")[0].setAttribute("id", "input-field");
            submitButton.textContent = "Submit";
            document.body.children[3].appendChild(submitButton);
            submitButton.addEventListener("click", function (event) {
            event.preventDefault();
            });
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
    
    //Events
    $("#startButton").on("click", setTime);
    $("#startButton").on("click", questionStart);
    $("#startButton").on("click", function () {
        $("#Intro").hide()});

    answerOne.hidden = true;
    answerTwo.hidden = true;
    answerThree.hidden = true;
    answerFour.hidden = true;

    $("#answerOne").on("click", function () {
       var score = 0
       var secondsLeft = 60

        if (questions[i]["choices"][0] === questions[i]["answer"]) {
            alert("Correct!");
            score++;
            
        }
        else {
            alert("Wrong!");
            secondsLeft -= 10;
            
        }
        i++;
        questionStart();
    })
    
    $("#answerTwo").on("click", function () {
        if (questions[i]["choices"][1] === questions[i]["answer"]) {
            alert("Correct!");
            score++;
            
        }
        else {
            alert("Wrong!");
            secondsLeft -= 10;
            
        }
        i++;
        questionStart();
    })
    
    $("#answerThree").on("click", function () {
        if (questions[i]["choices"][2] === questions[i]["answer"]) {
            alert("Correct!");
            score++;
            
        }
        else {
            alert("Wrong!");
            secondsLeft -= 10;
            
        }
        i++;
        questionStart();
    })
    
    $("#answerFour").on("click", function () {
        if (questions[i]["choices"][3] === questions[i]["answer"]) {
            alert("Correct!");
            score++;
            
        }
        else {
            alert("Wrong!");
            secondsLeft -= 10;
            
        }
        i++;
        questionStart();
    })

});



    

