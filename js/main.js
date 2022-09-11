// about video

const video = document.querySelector(".about__video");
const play = document.querySelector(".video");

video.addEventListener("click", () => {
  play.classList.toggle("active");
  video.pause();
  video.curentTime = 0;
});

play.addEventListener("click", close);

// portfolio examples

const examples = document.querySelectorAll(".example");
const load = document.querySelector(".portfolio__btn");

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
const wrapper = document.querySelector(".reviews");
const media768 = window.matchMedia('(max-width: 768px)');

let index = 0;


function changeImage(direction){

  if(direction=="next"){
     index++;
      if(index==reviews.length){
       index=0;
      }
  } 
  else{
          if(index==0){
           index=reviews.length-1;
          }
          else{
           index--;
          }
   }

 for(i=0;i<reviews.length;i++){
         reviews[i].classList.remove("active");
 }

 reviews[index].classList.add("active");     

}

next.onclick =  () => {
  changeImage("next");
}
prev.onclick = () => {
  changeImage("prev");
}

function getMedia768 (){
  if(media768.matches){
    wrapper.style.width = '320px';
    reviews.forEach(review => {
      review.style.minWidth = '320px';
    });
}
}
 
media768.addEventListener('resize', getMedia768);

getMedia768(media768);


// contacts form.

const contactsBtns = document.querySelectorAll(".contacts__btn");
const contactsForm = document.querySelector(".form");

function close(){
  this.classList.remove("active")
}

contactsBtns.forEach(contactsBtn => {
  contactsBtn.addEventListener("click", () => {
    contactsForm.classList.add('active');
  });
})

  contactsForm.addEventListener("click", close);


  // animation

const animations = document.querySelectorAll(".animation");

const triggerBottom = (window.innerHeight / 4) * 5;

window.addEventListener("scroll", checkAnimation);

checkAnimation();

function checkAnimation() {
  animations.forEach((animation) => {
    const animationTop = animation.getBoundingClientRect().top;
    if(animationTop < triggerBottom) {
      animation.classList.add("scale");
    }
  });
}


// smooth scroll

function scroll(){
  if(document.querySelector(".menu__item")){
    let links = document.querySelectorAll(".menu__link");

    links.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        goScroll(document.querySelector(this.getAttribute("href")));
      })
    });

    function goScroll(toBlock){

      toBlock.scrollIntoView({
        behavior: "smooth"
      })
    }
  }
}


//  registration form 
const registration = document.querySelector('.registrarion');
const registrarionBtn = document.querySelector('.register');

registrarionBtn.addEventListener('click', ()=>{
  registration.classList.add('active');
})

registration.addEventListener('click', close);


// login form
const logIn = document.querySelector('.login__form');
const logInBtn = document.querySelector('.login');

logInBtn.addEventListener('click', ()=> {
  logIn.classList.add('active');
})

logIn.addEventListener('click', close);

// burger menu
const burgerBtn = document.querySelector('.burger__menu');
const menuList = document.querySelector('.menu__list');

burgerBtn.addEventListener('click', ()=>{
  menuList.classList.toggle('active');
})

menuList.addEventListener('click', close);

