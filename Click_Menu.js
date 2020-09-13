const nav = body.querySelector("#nav");
const li = nav.querySelectorAll("li");
const pages = body.querySelector("#main").children;
const admin_btn = body.querySelector(".admin_button");
const modal = document.querySelector(".modal");

const input_text_array = modal.querySelectorAll("input");
const admin__content = modal.querySelector(".admin__content");
const close_modal_btn = modal.querySelector(".close_modal_btn");
const cv_bucket = modal.querySelector(".CV__content");
const cv_bucket_text = modal.querySelector(".drop_text");

const CLICKED = "clicked";

const PASSWORD = "829744";

var pw ="";

function DragLeave(event){
    event.stopPropagation();
    event.preventDefault();
    cv_bucket.classList.remove("CV_drag");
    cv_bucket.classList.add("CV_no_drag");
}

function DragOver(event){
    event.stopPropagation();
    event.preventDefault();
    cv_bucket.classList.remove("CV_no_drag")
    cv_bucket.classList.add("CV_drag");
}


function UploadResume(event){
    event.stopPropagation();
    event.preventDefault();  // preventing browser from loading file
    
    cv_bucket_text.innerHTML = "uploading....."

    var file = event.dataTransfer.files[0];
    
    // Create a storage ref
    var storageRef = firebase.storage().ref('CV/'+file.name);

    // Upload file
    storageRef.put(file).then(function(snapshot){
        var percentage = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
        if(percentage = 100){
            cv_bucket_text.innerHTML = "Done!!"
        }
    });

}

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
            cv_bucket.addEventListener("drop", UploadResume);
            cv_bucket.addEventListener('dragover', DragOver);
            cv_bucket.addEventListener('dragleave', DragLeave);
        }else{
            ClearModal();
            modal.classList.add("hidden__modal");
            alert(pw+"Access is resctricted")
        }
        pw = "";
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