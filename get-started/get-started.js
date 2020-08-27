var Student = document.getElementsByClassName("resS");
var Faculty = document.getElementsByClassName("resF");
var Employee = document.getElementsByClassName("resE");
var Researcher = document.getElementsByClassName("resR");

function displayItems() {
  // Get URL
  var url = window.location.href;
  // Get DIV
  if (url.search("Student") > 0) {
    for (i = 0; i < Faculty.length; i++) {
      Student[i].classList.remove("show");
    }
    for (i = 0; i < Employee.length; i++) {
      Student[i].classList.remove("show");
    }
    for (i = 0; i < Researcher.length; i++) {
      Student[i].classList.remove("show");
    }
    for (i = 0; i < Student.length; i++) {
      Student[i].classList.add("show");
    }
  } else if (url.search("Faculty") > 0) {
    for (i = 0; i < Student.length; i++) {
      Student[i].classList.remove("show");
    }
    for (i = 0; i < Employee.length; i++) {
      Student[i].classList.remove("show");
    }
    for (i = 0; i < Researcher.length; i++) {
      Student[i].classList.remove("show");
    }
    for (i = 0; i < Faculty.length; i++) {
      Student[i].classList.add("show");
    }
  } else if (url.search("Employee") > 0) {
    for (i = 0; i < Student.length; i++) {
      Student[i].classList.remove("show");
    }
    for (i = 0; i < Researcher.length; i++) {
      Student[i].classList.remove("show");
    }
    for (i = 0; i < Faculty.length; i++) {
      Student[i].classList.remove("show");
    }
    for (i = 0; i < Employee.length; i++) {
      Student[i].classList.add("show");
    }
  } else if (url.search("Researcher") > 0) {
    for (i = 0; i < Student.length; i++) {
      Student[i].classList.remove("show");
    }
    for (i = 0; i < Faculty.length; i++) {
      Student[i].classList.remove("show");
    }
    for (i = 0; i < Employee.length; i++) {
      Student[i].classList.remove("show");
    }
    for (i = 0; i < Researcher.length; i++) {
      Student[i].classList.add("show");
    }
  }
}
