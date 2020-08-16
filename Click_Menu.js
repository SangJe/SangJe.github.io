const nav = body.querySelector("#nav");
const li = nav.querySelectorAll("li");
const pages = body.querySelector("#main").children;
const admin = body.querySelector(".admin_button");

const CLICKED = "clicked";

function Admin_Click(){
    var popX = window.screenX + (document.body.offsetWidth /2);
    var popY = window.screenY + (document.body.offsetHeight /3);
    var options = 'status=no, height=300, width=200, left='+ popX + ', top='+ popY;
    window.open("login.html","login",options);
    console.log(popX);
    console.log(popY);
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
    for(var i =0; i<li.length; i++){
        li[i].addEventListener("click", MenuClick);
    }
    admin.addEventListener("click", Admin_Click);
}

function init(){
    AddListener();
}
init();