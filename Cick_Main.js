const button = main.querySelector(".resume_button");
const arr_a = document.querySelectorAll("a");

const MOUSE_ON = "mouse_on_button";
const MOUSE_OFF = "resume_button";
const MOUSE_ON_TEXT = "onmous_a";

function ChangeColor(event){
    const index = parseInt(event.srcElement.id);
    arr_a[index].classList.toggle(MOUSE_ON_TEXT);
    console.log(index);

}

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

    for(var i=1; i<arr_a.length; i++){
        arr_a[i].id = i;
        arr_a[i].addEventListener("mouseenter", ChangeColor);
        arr_a[i].addEventListener("mouseout", ChangeColor);
    }
}

init();