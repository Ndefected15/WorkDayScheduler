var one = document.getElementById("1pm");
var two = document.getElementById("2pm");
var three = document.getElementById("3pm");
var four = document.getElementById("4pm");
var five = document.getElementById("5pm");
var nine = document.getElementById("9am");
var ten = document.getElementById("10am");
var eleven = document.getElementById("11am");
var twelve = document.getElementById("12pm");

var date = moment().format("dddd") + " " + moment().format("Do MMM YYYY");
var hour = moment().format("h:mm:ss a");

var hour = moment().hours();
var userInput;
var hourSpan;

var interval = setInterval(function () {
  var momentNow = moment();
  $("#currentDay").html(
    momentNow.format("MMMM DD YYYY") + " " + momentNow.format("dddd")
  );
});

function start() {
  console.log("Current Hour " + hour);

  var init1 = JSON.parse(localStorage.getItem("01:00pm"));
  if (one) {
    return init1;
  }

  var init2 = JSON.parse(localStorage.getItem("02:00pm"));
  if (two) {
    return init2;
  }

  var init3 = JSON.parse(localStorage.getItem("03:00pm"));
  if (three) {
    return init3;
  }

  var init4 = JSON.parse(localStorage.getItem("04:00pm"));
  if (four) {
    return init4;
  }

  var init5 = JSON.parse(localStorage.getItem("05:00pm"));
  if (five) {
    return init5;
  }
  var init9 = JSON.parse(localStorage.getItem("09:00am"));
  if (nine) {
    return init9;
  }

  var init10 = JSON.parse(localStorage.getItem("10:00am"));
  if (ten) {
    return init10;
  }

  var init11 = JSON.parse(localStorage.getItem("11:00am"));
  if (eleven) {
    return init11;
  }

  var init12 = JSON.parse(localStorage.getItem("12:00pm"));
  if (twelve) {
    return init12;
  }
}

function timeCheck() {
  $(".form-control").each(function () {
    var timeTest = parseInt($(this).attr("id"));
    hour = parseInt(hour);
    console.log(timeTest);
    console.log(hour);

    if (hour > timeTest) {
      $(this).addClass("past");
    } else if (hour < timeTest) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
}

$(document).ready(function () {
  start();
  timeCheck();

  $(".saveBtn").on("click", function () {
    userInput = $(this).siblings(".form-control").val();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));
  });
});
