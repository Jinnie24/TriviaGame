var question1 = {
    "question" : "What is the name of the academy that represented the status quo in French art and detested the Impressionist movement?",
    "correctAnswer" : "the Salon",
    "allAnswers" : ["the Palace", "the Salon", "the School of Art", "the Opera"]
}


var question2 = {
    "question" : "Who is the only famous American-born Impressionist artist?",
    "correctAnswer" : "Mary Cassatt",
    "allAnswers" : ["Alfred Sisley", "Mary Cassatt", "Edouard Manet", "Berthe Morisot"]
}


var question3 = {
    "question" : "Who was the leader of France during the Impressionist movement?",
    "correctAnswer" : "Napoleon III",
    "allAnswers" : ["Napoleon III", "Charles DeGaulle", "Napoleon Bonaparte", "Eugene Haussman"]
}


var question4 = {
    "question" : "Which artist, who was greatly influential on the Impressionist artists, helped start the artistic movement known as Realism?",
    "correctAnswer" : "Gustave Courbet",
    "allAnswers" : ["Eugene Delacroix", "Hans Holbein", "Antoine Watteau", "Gustave Courbet"]
}


var question5 = {
    "question" : "Which Impressionist artist is famous for painting ballet dancers?",
    "correctAnswer" : "Edgar Degas",
    "allAnswers" : ["Claude Monet", "Edgar Degas", "Paul Cezanne", "Auguste Renoir"]
}


var question6 = {
    "question" : "Which artist is known for his lithography of the Moulin Rouge?",
    "correctAnswer" : "Henri Toulouse-Lautrec",
    "allAnswers" : ["Emile Zola", "Pierre Petit", "Felix Nadar", "Henri Toulouse-Lautrec"]
}


var question7 = {
    "question" : "What artist painted the picture 'Le Moulin de la Galette'?",
    "correctAnswer" : "Auguste Renoir",
    "allAnswers" : ["Paul Cezanne", "Auguste Renoir", "Alfred Sisley", "Edouard Manet"]
}


var question8 = {
    "question" : "What artist, part of the Neo-Impressionist style, created the technique known as Pointilism?",
    "correctAnswer" : "Georges Seurat",
    "allAnswers" : ["Jean Ingres", "Paul Gauguin", "Georges Seurat", "Eugene Delacroix"]
}

var i = 0;
var questions = [question1, question2, question3, question4, question5, question6, question7, question8];
var optNum = 1;
var qCount = 1;
var yesArray = ["assets/images/correct/index.gif", "assets/images/correct/tenor (1).gif", "assets/images/correct/tenor (2).gif", "assets/images/correct/tenor (3).gif", "assets/images/correct/tenor (4).gif", "assets/images/correct/tenor (5).gif", "assets/images/correct/tenor.gif", "assets/images/correct/tumblr_inline_p8jy05ITTw1qia98g_500.gif"];
var noArray = ["assets/images/nope/tenor.gif", "assets/images/nope/tenor (1).gif", "assets/images/nope/tenor (2).gif", "assets/images/nope/tenor (3).gif", "assets/images/nope/tenor (4).gif", "assets/images/nope/tenor (5).gif", "assets/images/nope/tenor (6).gif", "assets/images/nope/tenor (7).gif", "assets/images/nope/tenor (8).gif"];
var correctAnswersCount =0;
var wrongAnswersCount = 0;
var number = 30;
var intervalId;

$(document).ready(function() {
    $("#submit").hide();
    $("#start").on("click", function(event) {
        event.preventDefault();
        $("#submit").hide();
        newQuestion();
        $(this).hide();
      });
      
      $("#submit").on("click", function(event) {
        event.preventDefault();
        console.log("rabota");
        var vseinput= $('.form-check-input');
        for (var i =0;i<vseinput.length;i++){
            if($(vseinput[i]).prop('checked')){
                var answer = $(vseinput[i]).val();
            }
        }
        console.log(answer);
        $(this).hide();
        checkAnswer(answer);
      });
      

    

      function newQuestion() {
        clearInterval(intervalId);
        $(".timer").show();
        run();
          if(i==8) {
              showResults();
              return;
          }
        $("#result").empty();
        $("#qurrentOutput").show();
        $("#submit").show();

        currentQuestion = questions[i];
        
        console.log(currentQuestion);
        $("#question-cur").html(currentQuestion.question);
        
        var options = currentQuestion.allAnswers;
        console.log(currentQuestion.allAnswers);
        for(var j=0; j < currentQuestion.allAnswers.length; j++){
            $("#option"+optNum).val(currentQuestion.allAnswers[j]);
            $("#textoption"+optNum).html(currentQuestion.allAnswers[j]);
            optNum++;
        }
        optNum = 1;
        console.log(i);
    
        
      }

      function checkAnswer (answer) {
          if (answer===questions[i].correctAnswer) {
            $("#qurrentOutput").hide();
            var imgInd = Math.floor(Math.random() *8);
            var gif = $("<img>");
            gif.attr("src", yesArray[imgInd]);
            gif.attr("alt", "Yes");
            $("#result").text("You're right! The correct answer is " + questions[i].correctAnswer);
            $("#result").append("<br>");
            $("#result").append(gif);
            correctAnswersCount++;
            
          } else {
            $("#qurrentOutput").hide();
            var imgInd = Math.floor(Math.random() *8);
            var gif = $("<img>");
            gif.attr("src", noArray[imgInd]);
            gif.attr("alt", "No");
            $("#result").text("Nope! The correct answer is " + questions[i].correctAnswer);
            $("#result").append("<br>");
            $("#result").append(gif);
            wrongAnswersCount++;
            
        }
        if (answer === "none"){
            $("#qurrentOutput").hide();
            var gif = $("<img>");
            gif.attr("src", "https://media.giphy.com/media/gw3BepqJLYo9SF8c/giphy.gif");
            gif.attr("alt", "Time's Up");
            $("#result").text("The correct answer is " + questions[i].correctAnswer);
            $("#result").append("<br>");
            $("#result").append(gif);
            wrongAnswersCount++;
        }
          i++;
          console.log("corr" +correctAnswersCount);
          console.log("wrong" +wrongAnswersCount);
          
          nextQuestion();
          stop();
          number = 30;
          $(".timer").hide();


      }
      function nextQuestion() {
        setTimeout(newQuestion, 3000);
      }
      
      function showResults() {
        $("#result").empty();
        $("#qurrentOutput").hide();
        $("#start").show();
        var gif = $("<img>");
        gif.attr("src", "https://media.giphy.com/media/C730VNGCOvzBm/giphy.gif");
        gif.attr("alt", "The end");
        var theEnd = $("<div>");
        theEnd = "Congratulations! This quiz is done! Correct answers: " + correctAnswersCount + " Wrong answers: " + wrongAnswersCount;
        $("#result").html(theEnd);
        $("#result").append("<br>");
        $("#result").append(gif);
        i = 0;
        optNum = 1;
        qCount = 1;
        correctAnswersCount =0;
        wrongAnswersCount = 0;

      }

      function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
      }
      
      function decrement() {

        number--;

        $(".timer").html("<h2>" + number + "</h2>");

        if (number === 0) {

          stop();

          alert("Time Up!");
          wrongAnswersCount++;
          answer = "none";
          checkAnswer(answer);
        }
      }
      function stop() {
        $(".timer").hide();
        clearInterval(intervalId);
      }
});