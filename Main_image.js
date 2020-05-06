const main = body.querySelector("#main");
const id_one = main.querySelector("#one");

const FULL_BANNER = "full_banner";

function PaintImage(){
    const main_image = new Image();
    main_image.src = `image/main_banner.jpg`;
    main_image.classList.add(FULL_BANNER);
    id_one.prepend(main_image);
}

function init(){
    PaintImage();
}

init();