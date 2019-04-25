window.addEventListener('DOMContentLoaded', main, false);

function main(){
    // 1
    changeTitle('index.html', 'Webprogramming (LIX019P05) - Index');
    changeTitle('second.html', 'Webprogramming (LIX019P05) - Second');

    // 2
    var mainCol = document.getElementsByClassName('col-md-12');
    var newArticleHeader = 'This is my second article';
    var newArticleText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget eros ultrices, dapibus lacus ultrices, ultrices tortor. Nam tincidunt blandit neque, at ornare sapien ultricies ut. Integer eget ultricies velit. Cras eu tellus ex. Integer bibendum nisi neque, sed auctor odio blandit sit amet. Aenean augue tellus, tincidunt vel commodo bibendum, rutrum nec augue. Donec pulvinar sem in purus congue sodales. Nam magna urna, maximus ut eros vel, rutrum semper sem. Duis a efficitur mauris. Nunc a aliquam nisi, vel iaculis justo. Donec lacus nulla, sollicitudin vitae lectus vel, tempus vestibulum ipsum. In dignissim consequat pellentesque. Pellentesque eget eleifend velit. Aenean aliquam auctor nibh vitae tristique. Nulla facilisi.';
    addArticle(mainCol, newArticleHeader, newArticleText, 'index.html');

    // 3
    var link = changeLink();

    // 4
    linkBlank(link);

    // 5

    // 7
    addSidebar();
}

/**
 * Changes the title of the page.
 * @param page String of the pathname of the page.
 * @param title String of the new title.
 */
function changeTitle(page, title){
    if (getFileName() === page) {
        document.title = title;
    }
}

/**
 * Takes the window.location.pathname, splits it by the / and returns the last element,
 * which is the file/page name.
 * @returns {string} HTML page name.
 */
function getFileName() {
    var pathName = window.location.pathname.split('/');
    return pathName[pathName.length -1];
}

// 2
/**
 * Adds a new article to any element you want, with any header and text you want.
 * @param element The element in which to insert the article.
 * @param header String with the header text.
 * @param text String with the text for the article.
 * @param pagePath String with the pathname of the page it needs to insert to.
 * ToDo: multiple paragraphs option?
 */
function addArticle(element, header, text, pagePath) {
    var newArticle = document.createElement('article');

    var newHeader = document.createElement('h1');

    var newHeaderText = document.createTextNode(header);

    newHeader.appendChild(newHeaderText);

    var newParagraph = document.createElement('p');

    var newParagraphText = document.createTextNode(text);

    newParagraph.appendChild(newParagraphText);

    newArticle.appendChild(newHeader);
    newArticle.appendChild(newParagraph);

    if (getFileName() === pagePath) {
        var pos = element[0];

        pos.appendChild(newArticle);
    }
}

/**
 *
 * @returns {Node}
 */
function changeLink() {
    var links = document.getElementById('links');
    links = links.querySelectorAll('li');
    var link = links.item(2);
    link = link.firstChild;
    link.setAttribute('href', 'https://google.com');
    return link;
}

/**
 * Changes the link to open in a new tab.
 * @param link Link element.
 */
function linkBlank(link) {
    link.setAttribute('target', '_blank');
}


// 5
var navItems = document.getElementsByClassName('nav-item');
for (i = 0; i < navItems.length; i++) {
    var navItem = navItems[i];
    navItem = navItem.firstChild;
    document.write(navItem);
    navItem.style.color = 'red';
}
// ToDo: check this functionality, CSS is changed, but not displayed though

/**
 *
 */
function addSidebar() {
    if (window.location.pathname === 'second.html') {
        var mainColumn = document.getElementsByClassName('col-md-12');
        for (i = 0; i < mainColumn.length; i++) {
            mainColumn[i].className = 'col-md-8';
        }
        var cont = document.getElementsByClassName('container');

        var newCol = document.createElement('div');
        newCol.className = 'col-md-4';
        var newHeader = document.createElement('h1');
        var newHeaderText = document.createTextNode('Sidebar');
        newHeader.appendChild(newHeaderText);
        newCol.appendChild(newHeader);

        var newRow = document.createElement('div');
        newRow.className = 'row';

        //newRow.appendChild(mainColumn);
        newRow.appendChild(newCol);

        var pos = cont[0];

        pos.appendChild(newRow);
    }
}

