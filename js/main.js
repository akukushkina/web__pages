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