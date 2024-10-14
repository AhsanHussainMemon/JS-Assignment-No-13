// Assignemtn No 13

// Question No 1

// var currentDate = new Date();
// var date = currentDate.toDateString(); 
// var time = currentDate.toLocaleTimeString();

// document.write("Date: " + date + "<br>");
// document.write("Time: " + time);

// Question No 2

// var currentDate = new Date();
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentMonth = currentDate.getMonth();
// alert(months[currentMonth]);

// Question No 3

// var currentDate = new Date(); 
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
// var currentDay = days[currentDate.getDay()]; 
// alert(currentDay.slice(0, 3)); 

// Question No 4

// var day = new Date().getDay();      
// if (day === 0 || day === 6) {
//     alert("It's Fun Day"); 
// }
// else {
//     alert("It's Working Day");
// }

// Question No 5

// var date = new Date().getDate(); 
// if (date < 16) {
//     alert("First Fifteen Days of The Month"); 
// } else {
//     alert("Last Days of The Month"); 
// }


// Question No 6

// var TodayDate = new Date();
// var MilliSeconds = new Date().getTime();
// var Minutes = MilliSeconds/1000/60;
// document.write("Current Date: " + TodayDate + "<br>");
// document.write("Elapsed Milli-Seconds Since January 1,1970: " + MilliSeconds + "<br>");
// document.write("Elapsed Minutes Since January 1,1970: " + Minutes );

// Question No 7

// var Hours = new Date().getHours(); 

// if (Hours < 12) {
//     alert("It's AM"); 
// } else {
//     alert("It's PM"); 
// }

// Question No 8

// var LaterDate = new Date(2020, 11, 31); 
// document.write("The Last Day of The Last Month of 2020 Is: " + LaterDate);

// Question No 9

// var ramadanStart = new Date(2015, 5, 18); 
// var currentDate = new Date();
// var timeDifference = currentDate - ramadanStart;
// var daysPast = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// alert("Days since 1st Ramadan: " + daysPast);

// Question No 10

//  var referenceDate = new Date(2015, 11, 5); 
//  var startOf2015 = new Date(2015, 0, 1); 
//  var differenceInMilliseconds = referenceDate - startOf2015;
//  var secondsElapsed = differenceInMilliseconds / 1000;

//  document.write("On Reference Date " + referenceDate  +" "+  secondsElapsed + " Seconds Had Passed Since Begnning of 2015 " + startOf2015);


// Question No 11

//  var currentDate = new Date();
//  document.write("Current Date and Time: " + currentDate + "<br>");
//  currentDate.setHours(currentDate.getHours() + 1);
//  document.write("1 Hour Ago, It Was " + currentDate);

// Question No 12

//  var TodayDate = new Date();
//  var currentDate = new Date();
//  currentDate.setFullYear(currentDate.getFullYear() - 100);
//  alert("Current Date: " + TodayDate)
//  alert("100 Years Back, It Was: " + currentDate);

// Question No 13

//  var Age = prompt("Please Enter Your Age:");
//  var currentYear = new Date().getFullYear();
//  var BirthYear = currentYear - Age;
//  document.write("Your Birth Year Is: " + BirthYear);

// Question No 14

// var CustomerName = prompt("Enter Your Name:");
// var CurrentMonth = prompt("Enter The Current Month:");
// var NumberofUnits = prompt("Enter Number of Units:");
// var ChargesPerUnit = prompt("Enter Charges Per Unit:");
// var latePaymentSurcharge = prompt("Enter Late Payment Surcharge:");

// var NetAmount = NumberofUnits * ChargesPerUnit; 
// var GrossAmount = +(NetAmount) +  +(latePaymentSurcharge); 

// NetAmount = NetAmount();
// GrossAmount = GrossAmount();

// document.write("<h2>K-Electric Bill</h2>");
// document.write("Customer Name: " + CustomerName + "<br>");
// document.write("Current Month: " + CurrentMonth + "<br>");
// document.write("Number of Units: " + NumberofUnits + "<br>");
// document.write("Charges per Unit: " + ChargesPerUnit + "<br>");
// document.write("Net Amount Payable (within Due Date): " + NetAmount + "<br>");
// document.write("Late Payment Surcharge: " + latePaymentSurcharge + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + GrossAmount + "<br>");