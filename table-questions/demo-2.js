var A = [1, 2, 3, 4]; //These are the cells in the first row
var B = [5, 6, 7, 8]; //second row
var C = [9, 10, 11, 12]; //third row
var D = [13, 14, 15, 16]; //third row
var W = 1; // These variables w x y z are to pinpoint the column
var X = 2;
var Y = 3;
var Z = 4;
var result;
var firstAnswer;
var secondAnswer;
var Q1Answers = document.getElementsByClassName("Q1Answer");
var Q2Answers = document.getElementsByClassName("Q2Answer");
var possibleResults = document.getElementById("answers").children;

for (var i = 0; i < Q1Answers.length; i++) {
  Q1Answers[i].onclick = function() {
    for (var i = 0; i < Q1Answers.length; i++) {
      Q1Answers[i].classList.remove("selected");
    }
    this.classList.add("selected");

    firstAnswer = this.getAttribute("data-value");
    if (firstAnswer == "A1") {
      firstAnswer = A;
    } else if (firstAnswer == "B1") {
      firstAnswer = B;
    } else if (firstAnswer == "C1") {
      firstAnswer = C;
    } else {
      firstAnswer = D;
    }

    for (var i = 0; i < Q2Answers.length; i++) {
      Q2Answers[i].onclick = function() {
        for (var i = 0; i < Q2Answers.length; i++) {
          Q2Answers[i].classList.remove("selected");
        }
        this.classList.add("selected");

        secondAnswer = this.getAttribute("data-value");

        if (secondAnswer == "W1") {
          secondAnswer = W;
        } else if (secondAnswer == "X1") {
          secondAnswer = X;
        } else if (secondAnswer == "Y1") {
          secondAnswer = Y;
        } else {
          secondAnswer = Z;
        }

        for (var i = 0; i < possibleResults.length; i++) {
          possibleResults[i].classList.remove("show");
        }
        result = firstAnswer[secondAnswer - 1];
        var element = document.getElementById(result);
        element.classList.add("show");
      };
    }
    if (result < 20) {
      result = firstAnswer[secondAnswer - 1];
      for (var i = 0; i < possibleResults.length; i++) {
        possibleResults[i].classList.remove("show");
      }
      var element = document.getElementById(result);
      element.classList.add("show");
    }
  };
}
