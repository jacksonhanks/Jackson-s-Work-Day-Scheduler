 //Display the current date at page header
var today = dayjs();
    $("#currentDay").text(today.format('MMM D, YYYY'));
    
//Call to JQuery
$(document).ready(function() {

    //save button for click events listener
    $(".saveBtn").on("click", function() {
        
        //JQuery values of the description
        var info = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //store text in local storage
        localStorage.setItem(time, info);
    });

        //function for the current time 
        function currentHour() {
            //Pull the current time
            var timeHour = dayjs().hour();

            //loop for currentHour time blocks
            $(".time-block").each(function () {
                var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

                //Check the time to add background colors 
                if (timeBlock < timeHour) {
                    $(this).removeClass("present");
                    $(this).removeClass("future");
                    $(this).addClass("past");
                } else if (timeBlock === timeHour) {
                    $(this).removeClass("future");
                    $(this).removeClass("past");
                    $(this).addClass("present");
                } else {
                    $(this).removeClass("past");
                    $(this).removeClass("present");
                    $(this).addClass("future");
                }
            });
            
        }

    //Inputed info saved to local storage
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

    currentHour();
});



  