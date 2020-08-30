const nav = body.querySelector("#nav");
const li = nav.querySelectorAll("li");
const pages = body.querySelector("#main").children;
const admin_btn = body.querySelector(".admin_button");
const modal = document.querySelector(".modal");
const input_text_array = modal.querySelectorAll("input");
const admin__content = modal.querySelector(".admin__content");
const close_modal_btn = modal.querySelector(".close_modal_btn");

const CLICKED = "clicked";

const PASSWORD = "829744";

var pw ="";

function ClearModal(){
    for(var k=0; k<input_text_array.length; k++)
        input_text_array[k].value="";
}

function CloseModal(){
    ClearModal();
    modal.classList.add("hidden__modal");
    admin__content.classList.add("hidden_admin__content");
}

function AutoTab(event){
    var k = parseInt(event.srcElement.name)-1;

    pw += input_text_array[k].value;

    if(k!=5){
        input_text_array[k+1].focus();
    }else{
        if(pw ==PASSWORD){
            alert("Welcom administrator")
            ClearModal();
            admin__content.classList.remove("hidden_admin__content");
        }else{
            ClearModal();
            modal.classList.add("hidden__modal");
            alert(pw+"Access is resctricted")
        }
    }
}

function OpenModal(){
    modal.classList.remove("hidden__modal")
    input_text_array[0].focus();
}

function ScrollPage(ClickedNum){
    const move_page = pages[ClickedNum];
    const move_top_location = move_page.offsetTop
    window.scrollTo({top:move_top_location, behavior:'smooth'}); 
}

function PaintClicked(num){
    for(var i =0; i<li.length; i++){
        if(i == num){
            li[i].classList.add(CLICKED);
        }else{
            li[i].classList.remove(CLICKED);
        }
    }
}

function MenuClick(event){
    const ClickedNum = parseInt(event.srcElement.id)-1;
    PaintClicked(ClickedNum);
    ScrollPage(ClickedNum);
    
}

function AddListener(){
    for(var i=0; i<li.length; i++){
        li[i].addEventListener("click", MenuClick);
    }

    for(var k=0; k<input_text_array.length; k++){
        input_text_array[k].addEventListener("input", AutoTab);
    }

    admin_btn.addEventListener("click", OpenModal);
    close_modal_btn.addEventListener("click", CloseModal);
}

function init(){
    AddListener();
}
init();