/**
 * Takes the window.location.pathname, splits it by the / and returns the last element,
 * which is the file/page name.
 * @returns {string} HTML page name.
 */
function getFileName() {
    const pathName = window.location.pathname.split('/');
    return pathName[pathName.length -1];
}

/**
 * Document ready function
 */
$(function() {
    if (getFileName() === 'links.php') {
        $('div.wp-row').append(
            $('<div>').attr('class', 'col-md-12').append(
                $('<ul>').attr('class', 'fadeclass').append(
                    $('<li>').append(
                        $('<a>').attr('href', 'http://www.rug.nl').attr('target', '_blank').append(
                            "RUG"
                        )
                    )
                ).append(
                    $('<li>').append(
                        $('<a>').attr('href', 'http://www.nestor.rug.nl').attr('target', '_blank').append(
                            "Nestor"
                        )
                    )
                )
            ).append(
                $('<button>').attr('type', 'button').attr('class', 'btn btn-primary fade-btn').append(
                    "Fade"
                )
            )
        );
        $('button').click(function () {
            $('ul.fadeclass').fadeToggle("slow", "linear");
        });
    }
});