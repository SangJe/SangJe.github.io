const button = main.querySelector(".resume_button");

const MOUSE_ON = "mouse_on_button";
const MOUSE_OFF = "resume_button";

function MouseoutButton(event){
    button.style.backgroundColor = "";
}

function MouseonButton(event){
    button.style.backgroundColor = "#2c3e50";
}

function Button_clicked(event){
    
}

function init(){
    button.addEventListener("click", Button_clicked);
    button.addEventListener("mouseenter", MouseonButton);
    button.addEventListener("mouseout", MouseoutButton);
}

init();