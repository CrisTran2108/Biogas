// Function generate number of generator online/offline

var onlineValue = Math.floor(Math.random()*100);
var offlineValue = 100 - onlineValue;

$("#onlineValue").append(onlineValue);
$("#offlineValue").append(offlineValue);

// Return individual machine dashboard 
$(document).ready(function() {
    $("#machine1").click(function() {    
        $.get({
            url: "views/machine1.html",
            success: function(response) {
                $(".content-wrapper").html(response);
            }
        });
    });

    $("#machine2").click(function() {
        $.get({
            url: "views/machine2.html",
            success: function(response) {
                $(".content-wrapper").html(response);
            }
        });
    });

    $("#machine3").click(function() {
        $.get({
            url: "views/machine3.html",
            success: function(response) {
                $(".content-wrapper").html(response);
            }
        });
    });

    $("#profileButton").click(function() {
        $.get({
            url: "views/profile.html",
            success: function(response) {
                $(".content-wrapper").html(response);
            }
        });
    });
});
