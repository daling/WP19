/**
 * Validates the form. Goes through each form input and checks each value using a regular expression.
 * This RegEx is obtained by the html form input type. Shows errors if there are any.
 * @returns {boolean} True if no errors, else false.
 */
function validateForm(){
    const regexes = {
        "text": /^[a-zA-Z ]+$/,
        "email": /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
        "number": /^[0-9]{1,2}$/,
    };

    let errors = [];

    let form = $("form input");
    $(form).each(function (index, element) {
        let type = $(element).attr("type");
        let regex = regexes[type];
        let name = $(element).prev('label').text();
        if (element.value) {
            if (!regex.test(element.value)) {
                element.siblings(".valid-fee")
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


/**
 * Document ready function
 */
$(function() {
    validateForm();
});