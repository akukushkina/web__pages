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


