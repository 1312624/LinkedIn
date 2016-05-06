$(document).ready(function () {
    $(function () {
        $(".dialog").dialog({
            autoOpen: false
        });
        $("#btnAddExp").on("click", function () {
            $("#dialog-exp").dialog("open");
        });
        $("#btnEditSummary").on("click", function () {
            $("#dialog-sum").dialog("open");
        });
        $("#btnAddProject").on("click", function () {
            $("#dialog-project").dialog("open");
        });
        $("#btnAddSkill").on("click", function () {
            $("#dialog-skill").dialog("open");
        });
        
        $("#btnAddEducation").on("click", function () {
            $("#dialog-education").dialog("open");
        });
        
    });
  
    //Prevent form Reload Page;
    $(".dialog").submit(function(e) {
        e.preventDefault();
        $(".dialog").dialog("close");
    });
});
