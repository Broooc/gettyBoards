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


allImages = document.querySelectorAll(".switch");
let index = 0;
allImages.forEach(i => {
    index++;
    i.id = index;
});

function search_src(element){
    img = document.querySelector(".preview-image");
    img.src = element.src;
    elementId = element.id;
    imgClass = document.querySelector(".img-preview");
    imgClass.classList.toggle("active");
};

right = document.querySelector(".change-img-right");
left = document.querySelector(".change-img-left");

let parent = document.querySelector(".change-image-zone");


right.addEventListener("click", function(){
    if (elementId == index) {
        
    } else {
        elementId++
        next = document.getElementById(elementId);
        img.src = next.src
    }
});

left.addEventListener("click", function(){
    if (elementId == 1) {
        
    } else {
        elementId--
        prev = document.getElementById(elementId);
        img.src = prev.src
    }
});



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