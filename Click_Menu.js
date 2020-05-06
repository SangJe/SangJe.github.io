const nav = body.querySelector("#nav");
const li = nav.querySelectorAll("li");
const pages = body.querySelector("#main").children;

const CLICKED = "clicked";

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
    for(var i =0; i<li.length; i++){
        li[i].addEventListener("click", MenuClick);
    }
}

function init(){
    AddListener();
}
init();