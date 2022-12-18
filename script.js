// Current Date and Time in Header of Page using Day.js
var date = dayjs();
var currentDate = date.format('MMMM D, YYYY h:mm A');
$("#currentDay").html(currentDate);
// TODO: Add code to save user input to localStorage when the save button is clicked

$(function () {
  //create a variable for the save button
  var SaveButton = $(".saveBtn");
  // create a click event for the save button
  $(SaveButton).on("click", function () {
    //create a variable for the time area
    var timeArea = $(this).parent().attr('id');
    //create a variable for the text area
    var txtArea = $(this).siblings(".description").val();
    //save the to local storage
    localStorage.setItem(timeArea, txtArea);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 

  //created  a function for the time
  function timer() {
    //usisng time-block as a class to loop through each time block
    $(".time-block").each(function() {
      //create a variable for the current time
      var presentTime = dayjs().hour();
      console.log(presentTime);
      // setTime is the id of the time block
      var setTime = Number($(this).attr('id').split("hour")[1]);
      console.log(setTime);
      //if the time block is less than the current time, add the class of past
      if (setTime < presentTime) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      }
      //if the time block is equal to the current time, add the class of present
      else if (setTime === presentTime) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      //if the time block is greater than the current time, add the class of future
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
        
      }
    })
  }
  
  //at first i was going to type out each hour, but that was too much typing
  // so i did this for loop instead, it took me a while to figure out how to shorten it 
  for (var i = 0; i < 18; i++) {
    $("#hour" + i + " .description").val(localStorage.getItem("hour" + i));
  }
  
  //Added a clear button to clear the local storage and refresh the page. 
  // Because it was annoying to keep clearing the local storage manually
  $("#clear").on("click", function () {
    localStorage.clear();
    location.reload();
  })
  //calling the timer function 
  timer();
});
 
