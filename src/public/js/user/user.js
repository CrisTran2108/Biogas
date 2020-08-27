
// Return individual machine dashboard 
$(document).ready(function() {
    $("#profileButton").click(function() {
        $.get({
            url: "profile/profile.ejs",
            success: function(response) {
                $(".content-wrapper").html(response);
            }
        });
    });
});
