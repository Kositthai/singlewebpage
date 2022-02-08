const carouselImages = document.querySelector(".carousel__images");
const carouselButton = document.querySelectorAll(".carousel_button");
const numberOfImages = document.querySelectorAll(".carousel__images img").length;
let imageIndex = 1;
let translateX = 0;

carouselButton.forEach(button => {
    button.addEventListener("click", event => {
        if (event.target.id === "previous"){
            if(imageIndex !== 1) {
                imageIndex--;
                translateX +=300;
            }
        } else {
            if (imageIndex !== numberOfImages) {
                imageIndex++;
                translateX-= 300;
            }
        }

        carouselImages.style.transform = "translateX(${translateX}px)";
    });
});