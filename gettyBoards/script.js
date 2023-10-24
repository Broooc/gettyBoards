function search_keyword(element) {
    var text = document.querySelector('.input-1').value;
    if (text == "") {
        text += element.innerText;
        document.querySelector('.input-1').value = text;
    } else if (text == element.innerText) {
        text == "";
        document.querySelector('.input-1').value = text;
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

function signIn_popup_open() {
    let signIn = document.querySelector(".sign-in-popup");
    let all = document.querySelector("#signIn");
    signIn.classList.toggle("active");
    all.classList.toggle("active");
}

function signUp_popup_open() {
    let signUp = document.querySelector(".sign-up-popup");
    let all = document.querySelector("#signUp");
    signUp.classList.toggle("active");
    all.classList.toggle("active");
}

function forgotPass_popup_open() {
    let forgotPass = document.querySelector(".forgot-pass-popup");
    let all = document.querySelector("#forgot");
    forgotPass.classList.toggle("active");
    all.classList.toggle("active");
    let signIn = document.querySelector(".sign-in-popup");
    let alla = document.querySelector("#signIn");
    signIn.classList.toggle("active");
    alla.classList.toggle("active");
}

function filters_open() {
    let filters = document.querySelector(".side-window");
    let all = document.querySelector("#filters");
    filters.classList.toggle("active");
    all.classList.toggle("active");
}

function change_view_1() {
    let sliders1 = document.querySelector(".show-style-sliders-1");
    sliders1.classList.toggle("sa");
    let sliders2 = document.querySelector(".show-style-sliders-2");
    sliders2.classList.remove("sa");
    let block = document.querySelector(".select-block");
    block.classList.remove("active");
    let imgSelect = document.querySelector(".select-image-block");
    imgSelect.classList.remove("active");
}

function change_view_2() {
    let sliders2 = document.querySelector(".show-style-sliders-2");
    sliders2.classList.toggle("sa");
    let sliders1 = document.querySelector(".show-style-sliders-1");
    sliders1.classList.remove("sa");
    let block = document.querySelector(".select-block");
    block.classList.toggle("active");
    let imgSelect = document.querySelector(".select-image-block");
    imgSelect.classList.toggle("active");
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