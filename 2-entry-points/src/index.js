function createLinkElement(link, text) {
    var element = document.createElement('a');
    var elementText = document.createTextNode(text);
    element.setAttribute('href', link);
    element.appendChild(elementText);
    return element;
}

function createNewLine() {
    var element = document.createElement('br');
    return element;
}

function component() {
    var element = document.createElement('div');

    element.innerHTML = 'Hello, webpack!';
    element.appendChild(createNewLine());

    element.appendChild(createLinkElement('pageOne.html', 'Page One'));
    element.appendChild(createNewLine());
    element.appendChild(createLinkElement('pageTwo.html', 'Page Two'));
    element.appendChild(createNewLine());
    element.appendChild(createLinkElement('pageThree.html', 'Page Three'));
    element.appendChild(createNewLine());

    return element;
}

document.body.appendChild(component());