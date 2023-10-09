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

function search_src(element) {
    console.log(element);
    element.classList.toggle("active");
    imgClass = document.querySelector(".img-preview");
    imgClass.classList.toggle("active");
    miui = document.querySelector(".switch.active");
    miuiSrc = miui.src;
    img = document.querySelector(".preview-image");
    img.src = miuiSrc;
    console.log(miui);
    right = document.querySelector(".change-img-right");
    left = document.querySelector(".change-img-left");
    right.addEventListener("click", function(){
        miui = document.querySelector(".switch.active");
        elnext = miui.nextElementSibling;
        miuiSrc = miui.src;
        img.src = miuiSrc;
        miui.classList.toggle("active");
        elnext.classList.toggle("active");
        elprev.classList.toggle("active");
    })
    left.addEventListener("click", function(){
        miui = document.querySelector(".switch.active");
        elprev = miui.previousElementSibling;
        miuiSrc = miui.src;
        img.src = miuiSrc;
        miui.classList.toggle("active");
        elprev.classList.toggle("active");
        elnext.classList.toggle("active");
    })
}

var parent = document.querySelector(".change-image-zone");
var child = document.querySelector(".image-preview");

var cHeight = child.offsetHeight;

parent.style.height = cHeight;

function close_preview() {
    let preview = document.querySelector(".img-preview");
    preview.classList.toggle("active");
}

function closeDrop() {
    let drop = document.querySelector(".dropdown");
    drop.classList.toggle("active");
}

//function search_src(element) {
//    var src0 = element.src;
//    console.log(element);
//    let preview = document.querySelector(".img-preview");
//    preview.classList.toggle("active");
//    document.querySelector(".preview-image").src = src0;
//    right = document.querySelector(".change-img-right");
//   left = document.querySelector(".change-img-left");
//    right.addEventListener("click", function(){
//        elnext = element.nextElementSibling;
//        elRight = elnext.src;
//        document.querySelector(".preview-image").src = elRight;
//    })
//   left.addEventListener("click", function(){
//        elprev = element.previousElementSibling;
//        elLeft = elprev.src;
//        document.querySelector(".preview-image").src = elLeft;
//    })
//}

//var parent = document.querySelector(".change-image-zone");
//var child = document.querySelector(".image-preview");

//var cHeight = child.offsetHeight;

//parent.style.height = cHeight;

function close_preview() {
    let preview = document.querySelector(".img-preview");
    preview.classList.toggle("active");
}