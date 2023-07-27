function search_keyword(element) {
    var text = document.getElementsByClassName('input-1').value;
    if (text == "") {
        text += element.innerText;
        document.getElementsByClassName('input-1').value = text;
    } else if (text == element.innerText) {
        text == "";
        document.getElementsByClassName('input-1').value = text;
    }
}    