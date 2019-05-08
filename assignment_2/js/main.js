function validateForm(){
    // $("#inputName").
}

function writeFormData(){

}

/**
 * Toggles the active tab only if it is not active.
 */
function toggleFooterTab(){
    if ( !$( this ).hasClass("active") ){
        $("div.tab-pane").toggleClass("active");
        $("div.links").toggleClass("active");
        $("#link-tab").toggleClass("active");
        $("#contact-tab").toggleClass("active");
    }
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
        toggleFooterTab();
    });
    $("#contact-tab").click(function () {
        toggleFooterTab();
    });
});