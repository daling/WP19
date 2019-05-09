/**
 * Validates the form. Goes through each form input and checks each value using a regular expression.
 * This RegEx is obtained by the html form input type. Shows errors if there are any.
 * @returns {boolean} True if no errors, else false.
 */
function validateForm(){
    const regexes = {
        "text": /^[a-zA-Z ]+$/,
        "tel": /^[0-9]{10}$/,
        "email": /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
        "number": /^[0-9]{1,2}$/,
    };

    let errors = [];

    $(".form-group input").each(function (index, element) {
        let type = $(element).attr("type");
        let regex = regexes[type];
        let name = $(element).prev('label').text();
        if (element.value) {
            if (!regex.test(element.value)) {
                errors.push(`${name} not filled in correctly. Please follow the regex: ${regex}`);
            }
        } else {
            errors.push(`${name} field empty.`);
        }
    });

    if (errors.length) {
        $("#form-alert").show().html(errors.join("<br>"));
        return false;
    }
    $("#form-alert").hide();
    return true;
}

// function writeFormData(){
//     let inputValues = {};
//     $(".form-group input").each(function (index, element) {
//
//     };
// }

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
        if (validateForm()) {
            writeFormData();
        }
    });
    $("#erase").click(function () {
        $("#form")[0].reset();
    });
    $("#link-tab").click(toggleFooterTab);
    $("#contact-tab").click(toggleFooterTab);
});