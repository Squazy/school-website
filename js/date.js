$(document).ready(function() {
    // Create two variable with the names of the months and days in an array
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
    var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    
    // Create a newDate() object
    var newDate = new Date();
    // Extract the current date from Date object
    newDate.setDate(newDate.getDate());
    // Output the day, date, month and year    
    $('#Date').html(dayNames[newDate.getDay()] + ", " + monthNames[newDate.getMonth()] + '  ' + newDate.getDate() + ' ,'  + newDate.getFullYear());
    
    setInterval( function() {
        // Define the tomezones offset
        var timezoneOffset = -5;
        // Get the local date from client
        var currentDate = new Date();
        // Get UTC time
        utcDate = currentDate.getTime() + (currentDate.getTimezoneOffset() * 60000);
        // Set to UTC - 5
        estDate = new Date(utcDate + (3600000*timezoneOffset));
        var seconds = estDate.getSeconds();
        var minutes = estDate.getMinutes();
        var hours = estDate.getHours();
        
        // Add a leading zero to seconds value
        $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
        // Add a leading zero to the minutes value
        $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
        // Add a leading zero to the hours value
        $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
        },1000);
    }); 