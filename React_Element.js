const body = document.querySelector("body");
const menu = document.querySelector("#menu");
const wrapper = document.querySelector("#wrapper");

const FULL = "full_font";
const MID = "mid_font";
const SMALL = "small_font";

const WRAP = "FULLwrapper";
const EXITWRAP = "EXITwrapper"


function ScrollMenu(height){
    if(height<700){
        menu.style.overflowY="scroll";
    }else{
        menu.style.overflowY="";
    }
}

function FadeMenu(width){
    if(width < 1085){
        // fade out menu
        menu.style.display = "none"
        wrapper.classList.add(EXITWRAP);
        wrapper.classList.remove(WRAP);
    }else{
        //ReviveMenu();
        menu.style.display = "block"
        wrapper.classList.add(WRAP);
        wrapper.classList.remove(EXITWRAP);
    }
}

function ResizeFont(width){

    if(width > 1663){

        body.classList.add(FULL);
        body.classList.remove(MID);
        body.classList.remove(SMALL);
    }else if (1200< width && width < 1663){

        body.classList.add(MID);
        body.classList.remove(FULL);
        body.classList.remove(SMALL);

    }else {

        body.classList.add(SMALL);
        body.classList.remove(FULL);
        body.classList.remove(MID);
    }
}

function ResizeListener(event){
    width = event.currentTarget.innerWidth;
    height = event.currentTarget.innerHeight;
    ResizeFont(width);
    FadeMenu(width);
    ScrollMenu(height);
    ResizeBannerImage(width);
}

function init(){
    window.addEventListener("resize", ResizeListener);
    window.addEventListener("load", ResizeListener);
}

init();