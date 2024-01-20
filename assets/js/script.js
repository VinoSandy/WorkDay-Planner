
//set and updates the time in the browser
$("#currentDay").text(dayjs().format("DD MMM YYYY [at] hh:mm:ss a"));
setInterval(function () {

  $("#currentDay").text(dayjs().format("DD MMM YYYY [at] hh:mm:ss a"));
}, 1000);


// Get the current hour using the formattedDateTime
var today= dayjs();
var currentHour = today.hour();


//sets the attribute past, present, future by comparing current time and apptime
$(".time-block").each(function(){

var appHour = parseInt($(this).attr("id").split("hour")[1]);

if(currentHour === appHour){

    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
}

else if(currentHour > appHour){
$(this).removeClass("present");
$(this).removeClass("future");
$(this).addClass("past")
}

else{

    $(this).removeClass("present")
    $(this).removeClass("past");
    $(this).addClass("future");

}

})

//save the event data in local storage

 $(".saveBtn").click(function (event) {
    event.preventDefault();

var eventText = $(this).siblings(".description").val();
var eventTime = $(this).parent().attr("id");
 
localStorage.setItem(eventTime,eventText);

})
// get the eventdata from local storage
$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

//clears the data from local storage
$(".clear").click(function(event){
    event.preventDefault();
     $("textarea").val("");
    localStorage.clear();

})

