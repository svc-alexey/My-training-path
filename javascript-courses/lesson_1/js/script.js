"use strict";

// get function
function userColor(color) {
    document.bgColor = color;
}

function searchText() {
    let getTextSearch = document.getElementById('userTextSearch').value;
    let codeYandex = "https://yandex.ru/search/?lr=959&text=";
    let fullTextSerch = codeYandex + getTextSearch;
    // redirect url
    window.location.href = fullTextSerch;
}