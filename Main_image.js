const main = body.querySelector("#main");
const id_one = main.querySelector("#one");

const FULL_BANNER = "full_banner";

const main_image = new Image();

function PaintImage(){
    main_image.src = `image/main_banner.jpg`;
    main_image.classList.add(FULL_BANNER);
    id_one.prepend(main_image);
}

function init(){
    PaintImage();
}

init();