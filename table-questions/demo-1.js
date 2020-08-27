var A = [1, 2, 3, 4]; //These are the cells in the first row
var B = [5, 6, 7, 8]; //second row
var C = [9, 10, 11, 12]; //third row
var D = [13, 14, 15, 16]; //third row
var W = 1; // These variables w x y z are to pinpoint the column
var X = 2;
var Y = 3;
var Z = 4;
var A1 = "A1";
var B1 = "B1";
var C1 = "C1";
var D1 = "D1";
var W1 = "W1";
var X1 = "X1";
var Y1 = "Y1";
var Z1 = "Z1";

var Q1Answers = document.getElementsByClassName("Q1Answer");
var Q2Answers = document.getElementsByClassName("Q2Answer");

for (var i = 0; i < Q1Answers.length; i++) {
  Q1Answers[i].onclick = function() {
    var firstAnswer = this.getAttribute("data-value");
    if (firstAnswer == A1) {
      firstAnswer = A;
    } else if (firstAnswer == B1) {
      firstAnswer = B;
    } else if (firstAnswer == C1) {
      firstAnswer = C;
    } else {
      firstAnswer = D;
    }
    //this.classList.add("selected");
    var element = document.getElementById("Q1");
    element.classList.add("hide");
    var element = document.getElementById("Q2");
    element.classList.add("show");

    for (var i = 0; i < Q2Answers.length; i++) {
      Q2Answers[i].onclick = function() {
        var secondAnswer = this.getAttribute("data-value");
        if (secondAnswer == W1) {
          secondAnswer = W;
        } else if (secondAnswer == X1) {
          secondAnswer = X;
        } else if (secondAnswer == Y1) {
          secondAnswer = Y;
        } else {
          secondAnswer = Z;
        }
        var result = firstAnswer[secondAnswer - 1];
        //this.classList.add("selected");
        var element = document.getElementById("Q2");
        element.classList.add("hide");
        var element = document.getElementById(result);
        element.classList.add("show");
      };
    }
  };
}
