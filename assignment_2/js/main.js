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

    let form = $("form input");
    $(form).each(function (index, element) {
        let type = $(element).attr("type");
        let regex = regexes[type];
        let name = $(element).prev('label').text();
        if (element.value) {
            if (!regex.test(element.value)) {
                errors.push(`${name} not filled in correctly. Please follow this regex: ${regex}`);
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
 * Writes the data from the form input to the existing table. Goes through each form input value
 * and adds it to a Javascript Object. For convenience sake it checks if both the object and the
 * table have the same length. Then it goes to the correct table element and changes the text
 * to each value of the object.
 */
function writeFormData(){
    let inputValues = {};
    let formInput = $(".form-group input");
    $(formInput).each(function (index, element) {
        inputValues[element.id] = element.value;
    });
    let table = $("#form-content tr");
    if (Object.keys(inputValues).length === table.length){
        table = table.first();
        for (const value of Object.values(inputValues)){
            table.children().last().text(value);
            table = table.next();
        }
        $("#form-content").show();
    }
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
    $("#submit-btn").click(function () {
        if (validateForm()) {
            writeFormData();
        }
    });
    $("#erase-btn").click(function () {
        $("div.col-md-6 form")[0].reset();
        $("#form-content").hide();
        $("#form-alert").hide()
    });
    $("#link-tab").click(toggleFooterTab);
    $("#contact-tab").click(toggleFooterTab);
});