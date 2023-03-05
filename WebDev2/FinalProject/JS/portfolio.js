//Preload Images
if (document.images) {
  img1 = new Image();
  img1.src = "../Media/bisonbits1.png";
  img2 = new Image();
  img2.src = "../Media/bisonbits2.png";
  img3 = new Image();
  img3.src = "../Media/bisonbits3.png";
  img4 = new Image();
  img4.src = "../Media/bisonbits4.png";
  img5 = new Image();
  img5.src = "../Media/bisonbits5.png";
  img6 = new Image();
  img6.src = "../Media/bisonbits6.png";
}

//This is a horrible way to hard code each slides functionality...
//should've designed it generic functions that get passed a slides attributes
//This is why I would  prefer to use the react framework!

//------------SLIDE 1-----------------------//
const slideImage1 = document.querySelectorAll(".slide-image-1");
const slidesContainer1 = document.getElementById("slides-container-1");
const nextBtn1 = document.getElementById("next-btn-1");
const prevBtn1 = document.getElementById("prev-btn-1");
const navigationDots1 = document.getElementById("navigation-dots-1");


let numberOfImages1 = slideImage1.length;
console.log(numberOfImages1)
let slideWidth1 = slideImage1[0].clientWidth;
let currentSlide1 = 0;

// Set up the slider

function init() {
    
  slideImage1.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });

  slideImage1[0].classList.add("active");

  createNavigationDots();
}

init();

// Create navigation dots

function createNavigationDots() {
  for (let i = 0; i < numberOfImages1; i++) {
    const dot = document.createElement("div");
    dot.classList.add("single-dot-1");
    navigationDots1.appendChild(dot);

    dot.addEventListener("click", () => {
      goToSlide(i);
    });
  }

  navigationDots1.children[0].classList.add("active");
}

// Next Button

nextBtn1.addEventListener("click", () => {
  if (currentSlide1 >= numberOfImages1 - 1) {
    goToSlide(0);
    return;
  }

  currentSlide1++;
  goToSlide(currentSlide1);
});

// Previous Button

prevBtn1.addEventListener("click", () => {
  if (currentSlide1 <= 0) {
    goToSlide(numberOfImages1 - 1);
    return;
  }

  currentSlide1--;
  goToSlide(currentSlide1);
});

// Go To Slide

function goToSlide(slideNumber1) {
  slidesContainer1.style.transform =
    "translateX(-" + slideWidth1 * slideNumber1 + "px)";

  currentSlide1 = slideNumber1;

  setActiveClass();
}

// Set Active Class

function setActiveClass() {
  //Set active class for Slide Image

  let currentActive = document.querySelector(".slide-image-1.active");
  currentActive.classList.remove("active");
  slideImage1[currentSlide1].classList.add("active");

  //Set active class for navigation dots
  let currentDot = document.querySelector(".single-dot-1.active");
  currentDot.classList.remove("active");
  navigationDots1.children[currentSlide1].classList.add("active");
}




//------------SLIDE 2-----------------------//
const slideImage2 = document.querySelectorAll(".slide-image-2");
const slidesContainer2 = document.getElementById("slides-container-2");
const nextBtn2 = document.getElementById("next-btn-2");
const prevBtn2 = document.getElementById("prev-btn-2");
const navigationDots2 = document.getElementById("navigation-dots-2");


let numberOfImages2 = slideImage2.length;
console.log(numberOfImages2)
let slideWidth2 = slideImage2[0].clientWidth;
let currentSlide2 = 0;

// Set up the slider

function init2() {
    
  slideImage2.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });

  slideImage2[0].classList.add("active");

  createNavigationDots2();
}

init2();

// Create navigation dots

function createNavigationDots2() {
  for (let i = 0; i < numberOfImages2; i++) {
    const dot = document.createElement("div");
    dot.classList.add("single-dot-2");
    navigationDots2.appendChild(dot);

    dot.addEventListener("click", () => {
      goToSlide2(i);
    });
  }

  navigationDots2.children[0].classList.add("active");
}

// Next Button

nextBtn2.addEventListener("click", () => {
  if (currentSlide2 >= numberOfImages2 - 1) {
    goToSlide2(0);
    return;
  }

  currentSlide2++;
  goToSlide2(currentSlide2);
});

// Previous Button

prevBtn2.addEventListener("click", () => {
  if (currentSlide2 <= 0) {
    goToSlide2(numberOfImages2 - 1);
    return;
  }

  currentSlide2--;
  goToSlide2(currentSlide2);
});

// Go To Slide

function goToSlide2(slideNumber2) {
  slidesContainer2.style.transform =
    "translateX(-" + slideWidth2 * slideNumber2 + "px)";

  currentSlide2 = slideNumber2;

  setActiveClass2();
}

// Set Active Class

function setActiveClass2() {
  //Set active class for Slide Image

  let currentActive = document.querySelector(".slide-image-2.active");
  currentActive.classList.remove("active");
  slideImage2[currentSlide2].classList.add("active");

  //Set active class for navigation dots
  let currentDot = document.querySelector(".single-dot-2.active");
  currentDot.classList.remove("active");
  navigationDots2.children[currentSlide2].classList.add("active");
}



//------------SLIDE 3-----------------------//
const slideImage3 = document.querySelectorAll(".slide-image-3");
const slidesContainer3 = document.getElementById("slides-container-3");
const nextBtn3 = document.getElementById("next-btn-3");
const prevBtn3 = document.getElementById("prev-btn-3");
const navigationDots3 = document.getElementById("navigation-dots-3");


let numberOfImages3 = slideImage3.length;
let slideWidth3 = slideImage3[0].clientWidth;
let currentSlide3 = 0;

// Set up the slider

function init3() {
    
  slideImage3.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });

  slideImage3[0].classList.add("active");

  createNavigationDots3();
}

init3();

// Create navigation dots

function createNavigationDots3() {
  for (let i = 0; i < numberOfImages3; i++) {
    const dot = document.createElement("div");
    dot.classList.add("single-dot-3");
    navigationDots3.appendChild(dot);

    dot.addEventListener("click", () => {
      goToSlide3(i);
    });
  }

  navigationDots3.children[0].classList.add("active");
}

// Next Button

nextBtn3.addEventListener("click", () => {
  if (currentSlide3 >= numberOfImages3 - 1) {
    goToSlide3(0);
    return;
  }

  currentSlide3++;
  goToSlide3(currentSlide3);
});

// Previous Button

prevBtn3.addEventListener("click", () => {
  if (currentSlide3 <= 0) {
    goToSlide3(numberOfImages3 - 1);
    return;
  }

  currentSlide3--;
  goToSlide3(currentSlide3);
});

// Go To Slide

function goToSlide3(slideNumber3) {
  slidesContainer3.style.transform =
    "translateX(-" + slideWidth3 * slideNumber3 + "px)";

  currentSlide3 = slideNumber3;

  setActiveClass3();
}

// Set Active Class

function setActiveClass3() {
  //Set active class for Slide Image

  let currentActive = document.querySelector(".slide-image-3.active");
  currentActive.classList.remove("active");
  slideImage3[currentSlide3].classList.add("active");

  //Set active class for navigation dots
  let currentDot = document.querySelector(".single-dot-3.active");
  currentDot.classList.remove("active");
  navigationDots3.children[currentSlide3].classList.add("active");
}
