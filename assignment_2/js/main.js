function validateForm(){
    // $("#inputName").
}

function writeFormData(){

}

/**
 * Document ready function
 */
$(function() {
    $("#submit").click(function () {
        validateForm();
    });
    $("#erase").click(function () {
        $("#form")[0].reset();
    });
    $("#link-tab").click(function () {
        $("div.tab-pane").toggleClass("active");
        $("div.links").addClass("active");
        $("#link-tab").addClass("active");
        $("#contact-tab").removeClass("active");

    });
    $("#contact-tab").click(function () {
        $("div.tab-pane").toggleClass("active");
        $("div.contact").addClass("active");
        $("#link-tab").removeClass("active");
        $("#contact-tab").addClass("active");
    });
});