let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(num) {
  showSlides(slideIndex += num);
}

function showSlides(num) {
  let slides = document.getElementsByClassName("mySlides");
  if (num > slides.length) {
     slideIndex = 1
    }
  if (num < 1) {
    slideIndex = slides.length
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";

}