// Changes the document title depending on which page you are
if (window.location.pathname === '/WP19/assignment_1/index.html') {
    document.title = 'Webprogramming (LIX019P05) - Index';
} else if (window.location.pathname === '/WP19/assignment_1/second.html') {
    document.title = 'Webprogramming (LIX019P05) - Second';
}

/**
 * Adds a new article to any element you want, with any header and text you want.
 * @param element The element in which to insert the article.
 * @param header String with the header text.
 * @param text String with the text for the article.
 * ToDo: multiple paragraphs option?
 */
function addArticle(element, header, text) {
    var newArticle = document.createElement('article');

    var newHeader = document.createElement('h1');

    var newHeaderText = document.createTextNode(header);

    newHeader.appendChild(newHeaderText);

    var newParagraph = document.createElement('p');

    var newParagraphText = document.createTextNode(text);

    newParagraph.appendChild(newParagraphText);

    newArticle.appendChild(newHeader);
    newArticle.appendChild(newParagraph);

    var pos = element[0];

    pos.appendChild(newArticle);
}

var mainCol = document.getElementsByClassName('col-md-12');
var newArticleHeader = 'This is my second article';
var newArticleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget eros ultrices, dapibus lacus ultrices, ultrices tortor. Nam tincidunt blandit neque, at ornare sapien ultricies ut. Integer eget ultricies velit. Cras eu tellus ex. Integer bibendum nisi neque, sed auctor odio blandit sit amet. Aenean augue tellus, tincidunt vel commodo bibendum, rutrum nec augue. Donec pulvinar sem in purus congue sodales. Nam magna urna, maximus ut eros vel, rutrum semper sem. Duis a efficitur mauris. Nunc a aliquam nisi, vel iaculis justo. Donec lacus nulla, sollicitudin vitae lectus vel, tempus vestibulum ipsum. In dignissim consequat pellentesque. Pellentesque eget eleifend velit. Aenean aliquam auctor nibh vitae tristique. Nulla facilisi.';
addArticle(mainCol, newArticleHeader, newArticleText);