
// mailing list submission

$(document).ready(function() {
    $("#mail").keypress(function() {
        var key = event.which; 
        if (key == 13)
        alert("Thank You!");
      });
}); 



