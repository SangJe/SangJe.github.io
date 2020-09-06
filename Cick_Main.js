const resume_button = main.querySelector(".resume_button");
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
    resume_button.style.backgroundColor = "";
}

function MouseonButton(event){
    resume_button.style.backgroundColor = "#2c3e50";
    
}

function Button_clicked(event){

    var storageRef = firebase.storage().ref();

    storageRef.child('CV/CV.pdf').getDownloadURL().then(function(url) {

        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = function(event) {
            var blob = xhr.response;
          };
        xhr.open('GET',url);
        xhr.send()
    })
    

}

function init(){
    resume_button.addEventListener("click", Button_clicked);
    resume_button.addEventListener("mouseenter", MouseonButton);
    resume_button.addEventListener("mouseout", MouseoutButton);

    for(var i=1; i<arr_a.length; i++){
        arr_a[i].id = i;
        arr_a[i].addEventListener("mouseenter", ChangeColor);
        arr_a[i].addEventListener("mouseout", ChangeColor);
    }
}

init();