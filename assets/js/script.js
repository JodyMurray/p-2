var crystalBall = {};
function GenerateAnswer()
    responses = RandomOneOf(
    ["Yes", "Most certainly no", "It is not likely", 
    "Absolutely", "Ask again tomorrow", "Of course!", "No way!", "Concentrate and ask again",
    "As I see it, yes", "Outlook not so good"]);

window.onload = function() {
    var ball = document.getElementById("ball");
    var answer = document.getElementById("answer");
    var questionBtn = document.getElementById("question-btn");

questionBtn.addEventListener("click", function(){ prompt("Ask me anything!"); });

   /**
    *  
    * *response = responses[Math.floor(Math.random() * responses.length)];
    document.getElementById('answer').innerHTML = response;*/
}   

