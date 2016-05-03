$(document).ready(function () {
    $(function () {
        $("#dialog").dialog({
            autoOpen: false
        });
        $("#btnAdd").on("click", function () {
            $("#dialog").dialog("open");
        });
    });
    
    //Prevent form Reload Page;
    $("#dialog").submit(function(e) {
        e.preventDefault();
        $("#dialog").dialog("close");
    });
});
