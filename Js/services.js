var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



const images = document.querySelectorAll(`.contact-img`);
const popup = document.querySelector(`.popup`);
const popupImage = popup.querySelector('.popup__image');

if(popup){
  images.forEach(item => {
    item.addEventListener(`click`, (e) => {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '-17'
      popup.classList.add(`active`);
      popupImage.src = e.target.src;
    })
  })
  popup.addEventListener(`click`, () => {
    popup.classList.remove(`active`);
    document.body.style.overflow = 'visible'
  })
  popupImage.addEventListener(`click`, (e) => {
    e.stopPropagation()
  })
}
