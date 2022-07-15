// about video

const video = document.querySelector(".about__video");
const close = document.querySelector(".close");
const play = document.querySelector(".video")

video.addEventListener("click", () => {
    play.classList.toggle("active");
    video.pause();
    video.curentTime = 0;
})

close.addEventListener("click", () => {
    play.classList.remove("active");
})


// portfolio examples

const examples = document.querySelectorAll(".example");
const load = document.querySelector(".portfolio__btn");
let index = 3;

load.addEventListener("click", () => {
    examples.forEach((example) => {
    example.classList.remove("hidden");
});
});


// reviews slider

const container = document.querySelector(".reviews__slider");
const reviews = document.querySelectorAll(".review");
const prev = document.querySelector(".rewiews__prev");
const next = document.querySelector(".rewiews__next");

let idx = 0;

let interval = setInterval (run, 3000);

function run(){
    idx++
    changeImage()
}

function changeImage() {
    if(idx > reviews.length - 1){
        idx = 0;
    } else if( idx < 0){
        idx = reviews.length - 1;
    }

    container.style.transform = `translateX(${-idx * 395}px)`;
}

function resetInterval(){
    clearInterval(interval);
interval = setInterval(run, 3000);
}

next.addEventListener('click', () => {
    idx++;
    changeImage();
    resetInterval();
})

prev.addEventListener('click', () => {
    idx--;
    changeImage();
    resetInterval();
})