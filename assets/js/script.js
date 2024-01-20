/*var todayDateTime = dayjs().format("DDMMMMYYYY hh:mm:ss");

//Displays current date and time in the browser
$('#currentDay').text(todayDateTime);

var currentHour = dayjs.format("hh");*/



var todayDateTime= dayjs();

var formattedDateTime = todayDateTime.format("DDMMMMYYYY hh:mm:ss");

// Display the formatted date and time in the browser
$('#currentDay').text(formattedDateTime);

// Get the current hour using the formattedDateTime
var currentHour = todayDateTime.format("hh");


$(".hour-div").each(function(){

var appHour= $(this).attr("id")

console.log("id:"+appHour);

if(currentHour == appHour){

 $(this).addClass("present");

console.log('current' +currentHour+ 'appHour' +appHour)
console.log(currentHour===appHour);
}

if(currentHour > appHour){
$(this).removeClass("present");
$(this).addClass("past")
}

if(currentHour < appHour){
$(this).removeClass("past");
$(this).addClass("future");
}



})