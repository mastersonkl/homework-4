$(document).ready(function () {
  var timer = $(".timer");
  var codeHeader = $(".codeHeader");
  var codeText = $(".codeText");
  var startButton = $(".startBtn");
  var ansArea = $(".answerArea");
  var scores = $(".scores");
  var highscores = [];

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


  function renderTime() {
    timer.text("Timer: " + seconds);
  }

  function pauseTimer() {
    clearInterval(interval);
    renderTime();
  }


  startButton.click(function () {
    startTimer();
    qOne();
  });


  function clearText() {
    startButton.replaceWith("");
    codeText.empty();
    ansArea.empty();
  }


  function decTime() {
    seconds -= 10;
    renderTime();
  }


  function addInitials() {
    clearText();
    codeHeader.empty();

    var initials = $(
      "<form><input class = 'addedInput' placeholder = 'your initials'></form><button class = 'submitBtn'>Submit</button>"
    );
    scores.append(initials);

    $(".submitBtn").click(function (event) {
      event.preventDefault();

      var scoreText = $.trim($(".addedInput").val());

      if (scoreText === "") {
        return;
      }

      localStorage.setItem(scoreText, seconds);
      highscores.push(scoreText);

      var name = localStorage.getItem(scoreText, seconds);
      scores.prepend("Your Score is: " + name);
    });
  }


  function qOne() {
    clearText();
    codeHeader.text("What doesd HTML stand for?");

    var oneAnswers = [
      "Hyper Trainer Marking Language",
      "Hyper Text Marketing Language",
      "Hyper Text Markup Language",
      "Hyper Text Markup Lever",
    ];

    for (i = 0; i < oneAnswers.length; i++) {
      var answersBtn = $("<button>");
      answersBtn.addClass("aOne-button answer answer-btn-color");
      answersBtn.attr("data-answer", [i]);
      answersBtn.text(oneAnswers[i]);
      ansArea.append(answersBtn);
    }

    $(".aOne-button").click(function () {
      var correctAnswer = $(this).data("answer");
      if (correctAnswer === 2) {
        qTwo();
        alert("CORRECT!");
      } else {
        decTime();
        qTwo();
        alert("time is flying by!");
      }
    });
  }






  function qTwo() {
    clearText();
    codeHeader.text("What does NaN mean?");

    var twoAnswers = [
      "not a number",
      "now a name",
      "not a noun",
      "name a number",
    ];

    for (i = 0; i < twoAnswers.length; i++) {
      var answersBtn = $("<button>");
      answersBtn.addClass("aTwo-button answer answer-btn-color");
      answersBtn.attr("data-answer", [i]);
      answersBtn.text(twoAnswers[i]);
      ansArea.append(answersBtn);
    }
    $(".aTwo-button").click(function () {
      var correctAnswer = $(this).data("answer");
      if (correctAnswer === 0) {
        qThree();
        alert("CORRECT!");
      } else {
        decTime();
        qThree();
        alert("time is flying by!");
      }
    });
  }

  function qThree() {
    clearText();
    codeHeader.text("What is CSS?");

    var threeAnswers = [
      "it adds interactivity to the webpages",
      "it determines how content is laid out",
      "it locates websites on the internet",
      "it styles the website",
    ];

    for (i = 0; i < threeAnswers.length; i++) {
      var answersBtn = $("<button>");
      answersBtn.addClass("aThree-button answer answer-btn-color");
      answersBtn.attr("data-answer", [i]);
      answersBtn.text(threeAnswers[i]);
      ansArea.append(answersBtn);
    }
    $(".aThree-button").click(function () {
      var correctAnswer = $(this).data("answer");
      if (correctAnswer === 3) {
        qFour();
        alert("CORRECT");
      } else {
        decTime();
        qFour();
        alert("time is flying by!");
      }
    });
  }

  function qFour() {
    clearText();
    codeHeader.text(
      "What company created Bootstrap?"
    );

    var fourAnswers = ["facebook", "instagram", "reddit", "twitter"];

    for (i = 0; i < fourAnswers.length; i++) {
      var answersBtn = $("<button>");
      answersBtn.addClass("aFour-button answer answer-btn-color");
      answersBtn.attr("data-answer", [i]);
      answersBtn.text(fourAnswers[i]);
      ansArea.append(answersBtn);
    }
    $(".aFour-button").click(function () {
      var correctAnswer = $(this).data("answer");
      if (correctAnswer === 3) {
        qFive();
        alert("CORRECT!");
      } else {
        decTime();
        qFive();
        alert("time is flying by!");
      }
    });
  }

  function qFive() {
    clearText();
    codeHeader.text("What is a syntax error?");

    var fiveAnswers = [
      "an error you will never find",
      "an error due to user error",
      "an error caused by language rules being broken",
      "an error you can ignore",
    ];

    for (i = 0; i < fiveAnswers.length; i++) {
      var answersBtn = $("<button>");
      answersBtn.addClass("aFive-button answer answer-btn-color");
      answersBtn.attr("data-answer", [i]);
      answersBtn.text(fiveAnswers[i]);
      ansArea.append(answersBtn);
    }
    $(".aFive-button").click(function () {
      var correctAnswer = $(this).data("answer");
      if (correctAnswer === 2) {
        qSix();
        alert("CORRECT!");
      } else {
        decTime();
        qSix();
        alert("time is flying by!");
      }
    });
  }

  function qSix() {
    clearText();
    codeHeader.text(
      "What is FIFO?"
    );

    var sixAnswers = [
      "First in Few Out",
      "Few in Few Out",
      "First in First Out",
      "Few in First Out",
    ];

    for (i = 0; i < sixAnswers.length; i++) {
      var answersBtn = $("<button>");
      answersBtn.addClass("aSix-button answer answer-btn-color");
      answersBtn.attr("data-answer", [i]);
      answersBtn.text(sixAnswers[i]);
      ansArea.append(answersBtn);
    }
    $(".aSix-button").click(function () {
      var correctAnswer = $(this).data("answer");
      if (correctAnswer === 2) {
        qSeven();
        alert("CORRECT!");
      } else {
        decTime();
        qSeven();
        alert("time is flying by!");
      }
    });
  }

  function qSeven() {
    clearText();
    codeHeader.text("What dose this equation mean? a != t");

    var sevenAnswers = ["A is assinged t", "A is not equal to t", "A and t are equal", "T is add to a"];

    for (i = 0; i < sevenAnswers.length; i++) {
      var answersBtn = $("<button>");
      answersBtn.addClass("aSeven-button answer answer-btn-color");
      answersBtn.attr("data-answer", [i]);
      answersBtn.text(sevenAnswers[i]);
      ansArea.append(answersBtn);
    }
    $(".aSeven-button").click(function () {
      var correctAnswer = $(this).data("answer");
      if (correctAnswer === 1) {
        qEight();
        alert("CORRECT!");
      } else {
        decTime();
        qEight();
        alert("time is flying by!");
      }
    });
  }

  function qEight() {
    clearText();
    codeHeader.text(
      "One loop inside the body of another loop is called?"
    );

    var eightAnswers = ["loop in loop", "nested", "double loops", "loopy"];

    for (i = 0; i < eightAnswers.length; i++) {
      var answersBtn = $("<button>");
      answersBtn.addClass("aEight-button answer answer-btn-color");
      answersBtn.attr("data-answer", [i]);
      answersBtn.text(eightAnswers[i]);
      ansArea.append(answersBtn);
    }
    $(".aEight-button").click(function () {
      var correctAnswer = $(this).data("answer");
      if (correctAnswer === 1) {
        qNine();
        alert("CORRECT!");
      } else {
        decTime();
        qNine();
        alert("time is flying by!");
      }
    });
  }

  function qNine() {
    clearText();
    codeHeader.text(
      "What company created REACT?"
    );

    var nineAnswers = ["facebook", "twitter", "pinterest", "google"];

    for (i = 0; i < nineAnswers.length; i++) {
      var answersBtn = $("<button>");
      answersBtn.addClass("aNine-button answer answer-btn-color");
      answersBtn.attr("data-answer", [i]);
      answersBtn.text(nineAnswers[i]);
      ansArea.append(answersBtn);
    }
    $(".aNine-button").click(function () {
      var correctAnswer = $(this).data("answer");
      if (correctAnswer === 0) {
        qTen();
        alert("CORRECT!");
      } else {
        decTime();
        qTen();
        alert("time is flying by!");
      }
    });
  }

  function qTen() {
    clearText();
    codeHeader.text(
      "What does ul mean in HTML?"
    );

    var tenAnswers = ["unordered list", "under loop", "ugly line", "under loop"];

    for (i = 0; i < tenAnswers.length; i++) {
      var answersBtn = $("<button>");
      answersBtn.addClass("aTen-button answer answer-btn-color");
      answersBtn.attr("data-answer", [i]);
      answersBtn.text(tenAnswers[i]);
      ansArea.append(answersBtn);
    }
    $(".aTen-button").click(function () {
      var correctAnswer = $(this).data("answer");
      if (correctAnswer === 0) {
        alert("you got the right answer");
        pauseTimer();
        addInitials();
      } else {
        decTime();
        pauseTimer();
        addInitials();
      }
    });
  }
});

